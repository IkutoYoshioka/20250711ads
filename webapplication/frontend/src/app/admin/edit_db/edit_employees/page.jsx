"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { FiEdit, FiSearch, FiSave } from "react-icons/fi";
import { fetchEmployees, updateEmployee } from "@/lib/services/employees";
import { toast, Toaster } from "sonner";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const ITEMS_PER_PAGE = 8; // 1ページに表示する件数

const EditDB = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("従業員データの取得に失敗しました:", error);
      }
    };
    getEmployees();
  }, []);

  // 検索処理
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.lastName.includes(searchTerm) ||
      emp.firstName.includes(searchTerm) ||
      (emp.occupation && emp.occupation.includes(searchTerm)) ||
      (emp.facility && emp.facility.includes(searchTerm))
  );

  // ページネーション用のデータ取得
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 編集開始
  const openEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsSheetOpen(true);
  };

  const handleSaveClick = () => {
    setConfirmOpen(true);
  }

  // データを保存
  const saveChanges = async () => {
    setConfirmOpen(false);
    try {
      await updateEmployee(selectedEmployee.employeeId, selectedEmployee);
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employeeId === selectedEmployee.employeeId ? selectedEmployee : emp
        )
      );
      setIsSheetOpen(false);
      toast.success("従業員情報を更新しました。");
    } catch (error) {
      toast.error("従業員情報の更新に失敗しました。");
    }
  };

  return (
    <div className="p-3">
      <Toaster position="top-right" richColors />
      <h1 className="text-2xl font-bold mb-2 text-gray-800">従業員情報管理</h1>

      {/* フィルタ & 検索 */}
      <div className="flex gap-4 mb-3">
        <Input
          placeholder="名前・職種・部署で検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Button variant="outline">
          <FiSearch className="mr-1" /> 検索
        </Button>
      </div>

      {/* 従業員情報（テーブル表示） */}
      <div className="bg-white p-1 rounded-lg">
        <div className="overflow-y-auto max-h-[500px] border rounded-lg">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-gray-200 text-gray-700 sticky top-0">
              <tr>
                <th className="p-1 border">ID</th>
                <th className="p-1 border">氏名</th>
                <th className="p-1 border">職種</th>
                <th className="p-1 border">等級</th>
                <th className="p-1 border">施設</th>
                <th className="p-1 border text-center">操作</th>
              </tr>
            </thead>
            <tbody>
              {displayedEmployees.map((emp) => (
                <tr key={emp.employeeId} className="hover:bg-gray-50 transition">
                  <td className="p-1 border">{emp.employeeCode}</td>
                  <td className="p-1 border">{emp.lastName} {emp.firstName}</td>
                  <td className="p-1 border">{emp.occupation}</td>
                  <td className="p-1 border">{emp.grade}</td>
                  <td className="p-1 border">{emp.facility}</td>
                  <td className="p-1 border text-center">
                    <Button size="sm" variant="outline" onClick={() => openEdit(emp)}>
                      <FiEdit className="mr-1" /> 編集
                    </Button>
                    <Link href={`/admin/edit_db/edit_employees/${emp.employeeId}`}>
                      <Button size="sm" variant="outline" className="ml-2">
                        詳細
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ページネーション */}
        <Pagination className="mt-4">
          <PaginationContent className="cursor-pointer">
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={`page-${i}`}>
                <PaginationLink
                  isActive={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>

      {/* 編集用 Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">従業員情報編集</h2>
          {selectedEmployee ? (
            <div className="space-y-4">
              <Input
                placeholder="氏名"
                value={selectedEmployee.lastName + " " + selectedEmployee.firstName}
                disabled
              />
              <Input
                placeholder="職種"
                value={selectedEmployee.occupation}
                onChange={(e) =>
                  setSelectedEmployee({ ...selectedEmployee, occupation: e.target.value })
                }
              />
              <Input
                placeholder="等級 (Gxx)"
                value={selectedEmployee.grade}
                onChange={(e) =>
                  setSelectedEmployee({ ...selectedEmployee, grade: e.target.value })
                }
              />
              <Input
                placeholder="施設"
                value={selectedEmployee.facility}
                onChange={(e) =>
                  setSelectedEmployee({ ...selectedEmployee, facility: e.target.value })
                }
              />
              <Button className="w-full" onClick={handleSaveClick}>
                <FiSave className="mr-1" /> 保存
              </Button>
              {/* 2段階確認ダイアログ */}
              <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>           
                <DialogContent>
                  <DialogTitle>本当に保存しますか？</DialogTitle>
                  <DialogDescription>この操作は取り消せません。</DialogDescription>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                      キャンセル
                    </Button>
                    <Button variant="destructive" onClick={saveChanges}>
                      保存する
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ) : (
            <div>従業員が選択されていません</div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditDB;

