import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationPanel from "../components/NotificationPanel";
import { FileText, CreditCard, Box, Building } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const donutData = [
  { name: "BRI", value: 30 },
  { name: "Artha Graha", value: 25 },
  { name: "BTN", value: 20 },
  { name: "Mandiri", value: 15 },
  { name: "KEB Hana Bank", value: 10 },
];
const COLORS = ["#3b2b6f", "#00F0D0", "#3AC1E6", "#1f78b4", "#6b46c1"];

const notifications = [
  { time: "2 hrs", title: "admin_branch has updated", subtitle: "Harry Handoko - Contact | MYCRM" },
  { time: "2 hrs", title: "admin_branch has updated", subtitle: "Harry Handoko - Application | MYCRM" },
  { time: "4 hrs", title: "admin_branch has updated", subtitle: "Harry Handoko - Application | MYCRM" },
  { time: "4 hrs", title: "admin_branch has updated", subtitle: "Harry Handoko - Contact | MYCRM" },
];

function Dashboard() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    const adminJSON = localStorage.getItem("adminData");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || !adminJSON) {
      navigate("/login");
      return;
    }

    const admin = JSON.parse(adminJSON);
    setAdminData(admin);
  }, [navigate]);

  return (
    <main className="p-6 space-y-6 max-w-[1200px] mx-auto">
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-6">
        <img
          src="https://i.pravatar.cc/80?img=12"
          alt="profile"
          className="w-20 h-20 rounded-full border object-cover"
        />
        <div>
          <h3 className="text-cyan-700 font-bold text-lg">
            {adminData.username || "YOHANNES AFFANDY (JOJO)"}
          </h3>
          <p className="text-gray-500 text-sm">Loan Market Office Dev</p>
          <div className="text-sm text-gray-500 mt-2">
            <p>ID: <span className="font-medium text-gray-700">LM9990001</span></p>
            <p>Email: <span className="font-medium">{adminData.email || "it@loanmarket.co.id"}</span></p>
            <p>Phone: <span className="font-medium">6281234567890</span></p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="CONTACT" value="51" icon={<FileText size={20} />} />
            <StatCard title="LOAN" value="56" icon={<CreditCard size={20} />} />
            <StatCard title="PRODUCT" value="80" icon={<Box size={20} />} />
            <StatCard title="BANK" value="30" icon={<Building size={20} />} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProgressCard
              title="PINJAMAN DISETUJUI"
              percent={40}
              text="2/5 Pinjaman telah disetujui"
              color="#3B82F6"
            />
            <ProgressCard
              title="TARGET"
              percent={280}
              text="Rp14.000.000.000,00 / Rp5.000.000.000"
              color="#06B6D4"
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="text-center font-semibold text-gray-700 mb-6">
              Top 5 Bank Approval Tertinggi
            </h4>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    innerRadius="55%"
                    outerRadius="85%"
                    paddingAngle={4}
                  >
                    {donutData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-500">
              <div>
                <p><span className="text-cyan-500 font-semibold">30%</span> BRI</p>
                <p><span className="text-cyan-500 font-semibold">25%</span> Artha Graha</p>
              </div>
              <div>
                <p><span className="text-cyan-500 font-semibold">20%</span> BTN</p>
                <p><span className="text-cyan-500 font-semibold">15%</span> Mandiri</p>
                <p><span className="text-cyan-500 font-semibold">10%</span> KEB Hana Bank</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <NotificationPanel items={notifications} />
        </div>
      </section>
    </main>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-all">
      <div>
        <p className="text-xs text-gray-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-700">{value}</h3>
      </div>
      <div className="text-cyan-600">{icon}</div>
    </div>
  );
}

function ProgressCard({ title, percent, text, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4">
      <h4 className="font-semibold text-gray-700 mb-4">{title}</h4>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="transform -rotate-90">
            <path
              d="M18 2.0845 a15.9155 15.9155 0 0 1 0 31.831 a15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a15.9155 15.9155 0 0 1 0 31.831 a15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={`${percent} ${100 - percent}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
            {percent}%
          </div>
        </div>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default Dashboard;
