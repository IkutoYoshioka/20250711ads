"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { FiSave } from "react-icons/fi";
import { fetchEmployeeById, updateEmployee } from "@/lib/services/employees";

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  const router = useRouter();
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const data = await fetchEmployeeById(employeeId);
        setEmployee(data);
      } catch (error) {
        console.error("従業員データの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getEmployee();
  }, [employeeId]);

  const handleChange = (field, value) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveChanges = async () => {
    try {
      await updateEmployee(employee.employeeId, employee);
      toast.success("変更が保存されました！");
    } catch (error) {
      console.error("変更の保存に失敗しました:", error);
      toast.error("変更の保存に失敗しました。");
    }
  };

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  if (!employee) {
    return <p>従業員データが見つかりません。</p>;
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="container mx-auto p-6 space-y-6 overflow-y-auto h-[570px]">
        {/* 職場情報（変更不可） */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>従業員情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-lg font-semibold">職場情報</h3>
            <p className="text-gray-600 text-sm">この情報は変更できません。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <Input value={employee.firstName} disabled />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <Input value={employee.lastName} disabled />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">職種 (Job Title)</label>
                <Input
                  value={employee.occupation || ""}
                  onChange={(e) => handleChange("occupation", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">等級 (Grade)</label>
                <Input
                  value={employee.grade || ""}
                  onChange={(e) => handleChange("grade", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">施設名 (Facility)</label>
              <Input
                value={employee.facility || ""}
                onChange={(e) => handleChange("facility", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* パーソナル情報（編集可能） */}
        <Card className="bg-white shadow-lg">
          <CardContent className="space-y-6">
            <h3 className="text-lg font-semibold pt-4">パーソナル情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <Input
                  value={employee.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <Input
                  value={employee.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => router.push("/admin/edit_db/edit_employees")}>
              キャンセル
            </Button>
            <Button className="bg-blue-600 text-white" onClick={saveChanges}>
              <FiSave className="mr-1" /> 保存
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default EmployeeDetail;