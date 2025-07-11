"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { fetchMe, updateEmployee } from "@/lib/services/employees"; // 👈 fetchMe, updateEmployee を使用

const AccountPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [futureLicenses, setFutureLicenses] = useState([]);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 取得済み資格の編集用
  const [editLicenses, setEditLicenses] = useState(false);
  const [licensesObtainedInput, setLicensesObtainedInput] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await fetchMe();
        if (!user) {
          toast.error("ログイン情報が取得できませんでした。");
          return;
        }
        setUserInfo(user);
        setFutureLicenses(Array.isArray(user.licensesFuture) ? user.licensesFuture : []);
        setLicensesObtainedInput(user.licensesObtained || "");
      } catch (error) {
        console.error("ユーザー情報の取得失敗:", error);
        toast.error("データの取得に失敗しました。");
      }
    };
    loadUser();
  }, []);

  console.log("アカウント情報", userInfo);

  const handleFutureLicenseChange = (index, field, value) => {
    const updatedLicenses = futureLicenses.map((license, i) =>
      i === index ? { ...license, [field]: value } : license
    );
    setFutureLicenses(updatedLicenses);
  };

  const handleUserInfoChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addFutureLicense = () => {
    setFutureLicenses([...futureLicenses, { name: "", date: "", reason: "" }]);
  };

  const handleObtainLicense = (index) => {
    const obtainedLicense = futureLicenses[index];
    const updatedFutureLicenses = futureLicenses.filter((_, i) => i !== index);

    setFutureLicenses(updatedFutureLicenses);
    setUserInfo((prev) => ({
      ...prev,
      licensesObtained: prev.licensesObtained
        ? `${prev.licensesObtained}, ${obtainedLicense.name}`
        : obtainedLicense.name,
    }));
  };

  // 取得済み資格の編集保存
  const handleSaveLicensesObtained = () => {
    setUserInfo((prev) => ({
      ...prev,
      licensesObtained: licensesObtainedInput,
    }));
    setEditLicenses(false);
    toast.success("取得済み資格を更新しました");
  };

  // 取得済み資格の削除
  const handleDeleteObtainedLicense = (index) => {
    const arr = (licensesObtainedInput || "").split(",").map(s => s.trim()).filter(Boolean);
    arr.splice(index, 1);
    setLicensesObtainedInput(arr.join(", "));
  };

  // 今後取得予定の資格の削除
  const handleDeleteFutureLicense = (index) => {
    setFutureLicenses(futureLicenses.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!userInfo) return;

    try {
      const updatedUser = {
        ...userInfo,
        licensesFuture: futureLicenses,
        licensesObtained: userInfo.licensesObtained,
      };

      await updateEmployee(userInfo.employeeId, updatedUser);
      toast.success("変更を保存しました！");
    } catch (error) {
      console.error("保存エラー:", error);
      toast.error("データの保存に失敗しました。");
    }
  };

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("すべてのフィールドを入力してください。");
      return;
    }

    if (currentPassword !== userInfo.password) {
      toast.error("現在のパスワードが正しくありません。");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("新しいパスワードが一致しません。");
      return;
    }

    try {
      const updatedUser = {
        ...userInfo,
        password: newPassword,
      };

      await updateEmployee(userInfo.employeeId, updatedUser);
      setUserInfo(updatedUser);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("パスワードが変更されました！");
    } catch (error) {
      console.error("パスワード変更エラー:", error);
      toast.error("パスワードの変更に失敗しました。");
    }
  };

  if (!userInfo) return <p>Loading...</p>;

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="container mx-auto p-6 space-y-6 overflow-y-auto h-[570px]">
        {/* 職場情報（変更不可） */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-lg font-semibold">職場情報</h3>
            <p className="text-gray-600 text-sm">この情報は変更できません。</p>

            {/* 名前 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <Input value={userInfo.firstName} disabled />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <Input value={userInfo.lastName} disabled />
              </div>
            </div>

            {/* 職種 & 等級 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">職種</label>
                <Input value={userInfo.occupation} disabled />
              </div>
              <div>
                <label className="text-sm text-gray-600">等級</label>
                <Input value={userInfo.grade} disabled />
              </div>
            </div>

            {/* 施設名 */}
            <div>
              <label className="text-sm text-gray-600">施設名</label>
              <Input value={userInfo.facility} disabled />
            </div>
          </CardContent>
        </Card>

        {/* パーソナル情報（編集可能） */}
        <Card className="bg-white shadow-lg">
          <CardContent className="space-y-6">
            <h3 className="text-lg font-semibold pt-4">パーソナル情報</h3>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <Input
                  value={userInfo.email}
                  onChange={(e) => handleUserInfoChange("email", e.target.value)}
                  type="email"
                  placeholder="メールアドレス"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <Input
                  value={userInfo.phone}
                  onChange={(e) => handleUserInfoChange("phone", e.target.value)}
                  type="tel"
                  placeholder="電話番号"
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* 取得済みの資格 */}
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-2">
                取得済みの資格
                {!editLicenses && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-2 px-2 py-1 text-xs"
                    onClick={() => setEditLicenses(true)}
                  >
                    編集
                  </Button>
                )}
              </label>
              <div className="bg-gray-100 p-3 rounded-md">
                {editLicenses ? (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(licensesObtainedInput || "")
                        .split(",")
                        .map(s => s.trim())
                        .filter(Boolean)
                        .map((license, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {license}
                            <button
                              type="button"
                              className="ml-1 text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteObtainedLicense(idx)}
                              aria-label="削除"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                    </div>
                    <Input
                      value={licensesObtainedInput}
                      onChange={e => setLicensesObtainedInput(e.target.value)}
                      placeholder="カンマ区切りで入力（例: 保育士, 看護師）"
                      className="mb-2"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleSaveLicensesObtained} className="bg-blue-600 text-white">
                        保存
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => { setEditLicenses(false); setLicensesObtainedInput(userInfo.licensesObtained || ""); }}>
                        キャンセル
                      </Button>
                    </div>
                  </div>
                ) : userInfo.licensesObtained ? (
                  <ul className="flex flex-wrap gap-2">
                    {userInfo.licensesObtained.split(",").map((license, index) => (
                      <li key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{license.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">資格はありません</p>
                )}
              </div>
            </div>

            {/* 今後取得予定の資格 */}
            <div>
              <label className="text-sm text-gray-600">今後取得予定の資格</label>
              {futureLicenses.length > 0 ? (
                futureLicenses.map((license, index) => (
                  <div key={index} className="border p-4 rounded-md space-y-3 mb-4">
                    <Input
                      placeholder="資格名（例: 社会福祉士）"
                      value={license.name}
                      onChange={(e) =>
                        handleFutureLicenseChange(index, "name", e.target.value)
                      }
                    />
                    <Input
                      type="date"
                      placeholder="取得予定日"
                      value={license.date}
                      onChange={(e) =>
                        handleFutureLicenseChange(index, "date", e.target.value)
                      }
                    />
                    <Textarea
                      placeholder="取得の目的・理由（例: スキルアップのため）"
                      value={license.reason}
                      onChange={(e) =>
                        handleFutureLicenseChange(index, "reason", e.target.value)
                      }
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="bg-green-500 text-white"
                        onClick={() => handleObtainLicense(index)}
                      >
                        取得
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-red-500 text-white"
                        onClick={() => handleDeleteFutureLicense(index)}
                      >
                        削除
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">今後取得予定の資格はありません。</p>
              )}
              <Button variant="outline" onClick={addFutureLicense}>
                + 資格を追加する
              </Button>
            </div>
          </CardContent>

          {/* ボタン */}
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline">キャンセル</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-500" onClick={handleSave}>
              保存
            </Button>
          </CardFooter>
        </Card>

        {/* パスワード変更 */}
        <Card className="bg-white shadow-lg">
          <CardContent className="space-y-6">
            <h3 className="text-lg font-semibold pt-4">パスワード変更</h3>
            <div>
              <label className="text-sm text-gray-600">現在のパスワード</label>
              <Input
                type="password"
                placeholder="現在のパスワードを入力"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">新しいパスワード</label>
              <Input
                type="password"
                placeholder="新しいパスワードを入力"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">新しいパスワード（確認用）</label>
              <Input
                type="password"
                placeholder="新しいパスワードを再入力"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <CardFooter className="flex justify-end space-x-2">
              <Button
                variant="outline"
                className="hover:bg-gray-200 hover:shadow-md transition-all duration-200"
              >
                キャンセル
              </Button>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg transition-all duration-200"
                onClick={handlePasswordChange}
              >
                パスワードを変更
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AccountPage;
