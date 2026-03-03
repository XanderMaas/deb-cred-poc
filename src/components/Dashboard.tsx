import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { ArrowDownRight, ArrowUpRight, Euro, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

const formatEuro = (value: number) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
};

// Mock Data
const rolling12Months = [
  // Meer realistische ontwikkeling van DIO / DSO / DPO en CashGap (CCC = DIO + DSO - DPO)
  { month: 'Jan', DIO: 52, DSO: 42, DPO: 36, CashGap: 58 },
  { month: 'Feb', DIO: 51, DSO: 41, DPO: 37, CashGap: 55 },
  { month: 'Mar', DIO: 50, DSO: 40, DPO: 37, CashGap: 53 },
  { month: 'Apr', DIO: 49, DSO: 39, DPO: 38, CashGap: 50 },
  { month: 'Mei', DIO: 48, DSO: 38, DPO: 38, CashGap: 48 },
  { month: 'Jun', DIO: 47, DSO: 37, DPO: 39, CashGap: 45 },
  { month: 'Jul', DIO: 46, DSO: 36, DPO: 40, CashGap: 42 },
  { month: 'Aug', DIO: 45, DSO: 35, DPO: 40, CashGap: 40 },
  { month: 'Sep', DIO: 44, DSO: 35, DPO: 41, CashGap: 38 },
  { month: 'Okt', DIO: 44, DSO: 34, DPO: 41, CashGap: 37 },
  { month: 'Nov', DIO: 43, DSO: 34, DPO: 42, CashGap: 35 },
  { month: 'Dec', DIO: 42, DSO: 33, DPO: 42, CashGap: 33 },
];

const COLORS = ['#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#f97316', '#eab308'];

const top10Debtors = [
  { name: 'Jansen B.V.', balance: 125000, invoices: 12, avgDays: 45 },
  { name: 'De Vries Groep', balance: 95000, invoices: 8, avgDays: 38 },
  { name: 'Bakker & Zn', balance: 82000, invoices: 15, avgDays: 52 },
  { name: 'Visser Logistics', balance: 76000, invoices: 5, avgDays: 31 },
  { name: 'Smit Trading', balance: 64000, invoices: 9, avgDays: 41 },
  { name: 'Meijer Services', balance: 58000, invoices: 11, avgDays: 35 },
  { name: 'Mulder B.V.', balance: 45000, invoices: 4, avgDays: 28 },
  { name: 'Peters Retail', balance: 42000, invoices: 7, avgDays: 44 },
  { name: 'Bos Bouw', balance: 38000, invoices: 6, avgDays: 49 },
  { name: 'Dekker IT', balance: 35000, invoices: 3, avgDays: 30 },
];

const top10Creditors = [
  { name: 'TechCorp Inc.', balance: 85000, invoices: 5 },
  { name: 'Global Supplies', balance: 72000, invoices: 12 },
  { name: 'Office Plus', balance: 64000, invoices: 8 },
  { name: 'Marketing Pro', balance: 55000, invoices: 3 },
  { name: 'Consulting Group', balance: 48000, invoices: 2 },
  { name: 'Cloud Services', balance: 42000, invoices: 6 },
  { name: 'Logistics Hub', balance: 36000, invoices: 9 },
  { name: 'Legal Partners', balance: 28000, invoices: 4 },
  { name: 'Facility Mgt', balance: 25000, invoices: 7 },
  { name: 'Energy Co', balance: 18000, invoices: 1 },
];

const arAging = [
  { name: 'Niet vervallen', value: 500000 },
  { name: '1-30 dagen', value: 200000 },
  { name: '31-60 dagen', value: 100000 },
  { name: '61-89 dagen', value: 30000 },
  { name: '90+ dagen', value: 20000 },
];

const apAging = [
  { name: 'Niet vervallen', value: 300000 },
  { name: '1-30 dagen', value: 80000 },
  { name: '31-60 dagen', value: 30000 },
  { name: '61-89 dagen', value: 5000 },
  { name: '90+ dagen', value: 5000 },
];

const overdueDebtors = [
  { name: 'Bakker & Zn', balance: 45000, invoices: 5, b1: 15000, b2: 20000, b3: 10000, b4: 0, hist: 24, avg: 52 },
  { name: 'Jansen B.V.', balance: 35000, invoices: 3, b1: 25000, b2: 10000, b3: 0, b4: 0, hist: 12, avg: 45 },
  { name: 'Bos Bouw', balance: 28000, invoices: 4, b1: 8000, b2: 15000, b3: 5000, b4: 0, hist: 18, avg: 49 },
  { name: 'Peters Retail', balance: 22000, invoices: 2, b1: 0, b2: 12000, b3: 10000, b4: 0, hist: 15, avg: 44 },
  { name: 'Smit Trading', balance: 18000, invoices: 3, b1: 18000, b2: 0, b3: 0, b4: 0, hist: 8, avg: 41 },
];

const overdueCreditors = [
  { name: 'Global Supplies', balance: 25000, invoices: 4, b1: 15000, b2: 10000, b3: 0, b4: 0, hist: 10, avg: 42 },
  { name: 'TechCorp Inc.', balance: 18000, invoices: 2, b1: 18000, b2: 0, b3: 0, b4: 0, hist: 5, avg: 35 },
  { name: 'Logistics Hub', balance: 12000, invoices: 3, b1: 5000, b2: 7000, b3: 0, b4: 0, hist: 14, avg: 38 },
  { name: 'Marketing Pro', balance: 8000, invoices: 1, b1: 0, b2: 8000, b3: 0, b4: 0, hist: 2, avg: 45 },
  { name: 'Cloud Services', balance: 5000, invoices: 1, b1: 0, b2: 0, b3: 5000, b4: 0, hist: 4, avg: 55 },
];

const expectedARInflowWeeks = [
  { week: 'Week 1', month: 'Jan', value: 140000 },
  { week: 'Week 2', month: 'Jan', value: 155000 },
  { week: 'Week 3', month: 'Jan', value: 160000 },
  { week: 'Week 4', month: 'Jan', value: 150000 },
  { week: 'Week 5', month: 'Feb', value: 145000 },
  { week: 'Week 6', month: 'Feb', value: 158000 },
  { week: 'Week 7', month: 'Feb', value: 162000 },
  { week: 'Week 8', month: 'Feb', value: 170000 },
  { week: 'Week 9', month: 'Mrt', value: 168000 },
  { week: 'Week 10', month: 'Mrt', value: 172000 },
  { week: 'Week 11', month: 'Mrt', value: 165000 },
  { week: 'Week 12', month: 'Mrt', value: 160000 },
];

const expectedAPOutflowWeeks = [
  { week: 'Week 1', month: 'Jan', value: 90000 },
  { week: 'Week 2', month: 'Jan', value: 95000 },
  { week: 'Week 3', month: 'Jan', value: 88000 },
  { week: 'Week 4', month: 'Jan', value: 92000 },
  { week: 'Week 5', month: 'Feb', value: 93000 },
  { week: 'Week 6', month: 'Feb', value: 97000 },
  { week: 'Week 7', month: 'Feb', value: 99000 },
  { week: 'Week 8', month: 'Feb', value: 100000 },
  { week: 'Week 9', month: 'Mrt', value: 98000 },
  { week: 'Week 10', month: 'Mrt', value: 102000 },
  { week: 'Week 11', month: 'Mrt', value: 95000 },
  { week: 'Week 12', month: 'Mrt', value: 94000 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Financieel Dashboard</h1>
          <p className="text-slate-500 mt-1">Overzicht van werkkapitaal, debiteuren en crediteuren</p>
        </div>

        {/* Top Layer */}
        <div className="space-y-6">
          {/* Row 1: 4 KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Netto werkkapitaal</CardTitle>
                <Euro className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatEuro(1250000)}</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +4,5% t.o.v. vorige maand
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Voorraad</CardTitle>
                <Euro className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatEuro(600000)}</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +3,2% t.o.v. vorige maand
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Debiteuren</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatEuro(850000)}</div>
                <p className="text-xs text-rose-600 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +2,1% t.o.v. vorige maand
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Crediteuren</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatEuro(420000)}</div>
                <p className="text-xs text-emerald-600 flex items-center mt-1">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  -1,2% t.o.v. vorige maand
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: Line Chart & KPI columns */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <Card className="xl:col-span-2 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Cash conversion cycle</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={rolling12Months} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#64748b' }}
                      />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: number, name: string) => [`${value} dagen`, name]}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Line type="monotone" dataKey="DIO" stroke="#0ea5e9" strokeWidth={2} dot={false} activeDot={false} />
                      <Line type="monotone" dataKey="DSO" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={false} />
                      <Line type="monotone" dataKey="DPO" stroke="#f43f5e" strokeWidth={2} dot={false} activeDot={false} />
                      <Line
                        type="monotone"
                        dataKey="CashGap"
                        name="Cash gap"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Cash conversion cycle (dagen)</CardTitle>
                  <Clock className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">
                    58 <span className="text-lg font-normal text-slate-500">dagen</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-2">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -2,0 dagen t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Huidig vervallen vorderingen</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">{formatEuro(150000)}</div>
                  <p className="text-sm text-slate-500 mt-2">17,6% van totaal uitstaand</p>
                  <p className="text-xs text-rose-600 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +1,3% t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Cash gap (dagen)</CardTitle>
                  <Clock className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">
                    40 <span className="text-lg font-normal text-slate-500">dagen</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-2">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -3,0 dagen t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Gemiddeld Achterstallig</CardTitle>
                  <Clock className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">
                    14 <span className="text-lg font-normal text-slate-500">dagen</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">Bovenop reguliere betalingstermijn</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Middle Layer: 2 Columns (AR vs AP) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Column 1: Debiteuren */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Debiteuren</h2>
            
            {/* Debiteuren KPI's */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">DSO (Days Sales Outstanding)</CardTitle>
                  <Clock className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    38 <span className="text-sm font-normal text-slate-500">dagen</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -2,0 dagen t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Collection Efficiency Index</CardTitle>
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    94<span className="text-sm font-normal text-slate-500 ml-1">%</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +1,0 pp t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Donut & Table Top 10 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Top 10 Debiteuren (Verdeling)</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={top10Debtors}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="balance"
                        >
                          {top10Debtors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number, _name, props: any) => {
                            const percent = props?.percent ? `${(props.percent * 100).toFixed(1)}%` : '';
                            const name = props?.payload?.name ?? '';
                            return [`${name}: ${formatEuro(value)} (${percent})`, ''];
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Top 10 Debiteuren</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-auto">
                  <div className="max-h-[250px] overflow-y-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 sticky top-0">
                        <tr>
                          <th className="px-4 py-2 font-medium text-slate-500">Naam</th>
                          <th className="px-4 py-2 font-medium text-slate-500 text-right">Saldo</th>
                          <th className="px-4 py-2 font-medium text-slate-500 text-center">Facturen</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {top10Debtors.map((d, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="px-4 py-2 font-medium text-slate-900 truncate max-w-[140px]">
                              <span
                                className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
                                style={{ backgroundColor: COLORS[i % COLORS.length] }}
                              />
                              <span className="align-middle">{d.name}</span>
                            </td>
                            <td className="px-4 py-2 text-right">{formatEuro(d.balance)}</td>
                            <td className="px-4 py-2 text-center">{d.invoices}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Waterfall / Aging */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Ouderdomsanalyse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={arAging} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(val) => `€${val/1000}k`} />
                      <Tooltip 
                        formatter={(value: number) => formatEuro(value)}
                        cursor={{ fill: '#f1f5f9' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                        {arAging.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : index === 1 ? '#f59e0b' : index === 2 ? '#f97316' : index === 3 ? '#ef4444' : '#b91c1c'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Overdue Table */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Top 10 Achterstallige Debiteuren</CardTitle>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left whitespace-nowrap">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-slate-500">Naam</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">Achterstallig</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center"># Facturen</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">1-30d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">31-60d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">61-89d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">90+d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center">Hist. Te Laat</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center">Gem. Tijd</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {overdueDebtors.map((d, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-900">{d.name}</td>
                        <td className="px-4 py-3 text-right font-medium text-rose-600">{formatEuro(d.balance)}</td>
                        <td className="px-4 py-3 text-center">{d.invoices}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{d.b1 > 0 ? formatEuro(d.b1) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{d.b2 > 0 ? formatEuro(d.b2) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{d.b3 > 0 ? formatEuro(d.b3) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{d.b4 > 0 ? formatEuro(d.b4) : '-'}</td>
                        <td className="px-4 py-3 text-center">{d.hist}</td>
                        <td className="px-4 py-3 text-center">{d.avg}d</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Verwachte handelsuitstroom */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Verwachte handelsuitstroom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expectedAPOutflowWeeks} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: '#64748b' }}
                        tickFormatter={(val) => `€${val / 1000}k`}
                      />
                      <Tooltip
                        cursor={{ fill: '#f1f5f9' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: number, _name, props: any) => [
                          formatEuro(value),
                          `Week (${props?.payload?.month})`,
                        ]}
                      />
                      <Bar dataKey="value" fill="#64748b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 2: Crediteuren */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Crediteuren</h2>
            
            {/* Crediteuren KPI's */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">DPO (Days Payables Outstanding)</CardTitle>
                  <Clock className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    41 <span className="text-sm font-normal text-slate-500">dagen</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +1,5 dagen t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Tijdige Betalingsgraad</CardTitle>
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    89<span className="text-sm font-normal text-slate-500 ml-1">%</span>
                  </div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0,8 pp t.o.v. vorige maand
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Donut & Table Top 10 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Top 10 Crediteuren (Verdeling)</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={top10Creditors}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="balance"
                        >
                          {top10Creditors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[(index + 4) % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number, _name, props: any) => {
                            const percent = props?.percent ? `${(props.percent * 100).toFixed(1)}%` : '';
                            const name = props?.payload?.name ?? '';
                            return [`${name}: ${formatEuro(value)} (${percent})`, ''];
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Top 10 Crediteuren</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-auto">
                  <div className="max-h-[250px] overflow-y-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 sticky top-0">
                        <tr>
                          <th className="px-4 py-2 font-medium text-slate-500">Naam</th>
                          <th className="px-4 py-2 font-medium text-slate-500 text-right">Saldo</th>
                          <th className="px-4 py-2 font-medium text-slate-500 text-center">Facturen</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {top10Creditors.map((c, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="px-4 py-2 font-medium text-slate-900 truncate max-w-[120px]">{c.name}</td>
                            <td className="px-4 py-2 text-right">{formatEuro(c.balance)}</td>
                            <td className="px-4 py-2 text-center">{c.invoices}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Waterfall / Aging */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Ouderdomsanalyse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={apAging} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(val) => `€${val/1000}k`} />
                      <Tooltip 
                        formatter={(value: number) => formatEuro(value)}
                        cursor={{ fill: '#f1f5f9' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]}>
                        {apAging.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : index === 1 ? '#f59e0b' : index === 2 ? '#f97316' : index === 3 ? '#ef4444' : '#b91c1c'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Overdue Table */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Top 10 Achterstallige Crediteuren</CardTitle>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left whitespace-nowrap">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-slate-500">Naam</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">Achterstallig</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center"># Facturen</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">1-30d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">31-60d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">61-89d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-right">90+d</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center">Hist. Te Laat</th>
                      <th className="px-4 py-3 font-medium text-slate-500 text-center">Gem. Tijd</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {overdueCreditors.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-900">{c.name}</td>
                        <td className="px-4 py-3 text-right font-medium text-rose-600">{formatEuro(c.balance)}</td>
                        <td className="px-4 py-3 text-center">{c.invoices}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{c.b1 > 0 ? formatEuro(c.b1) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{c.b2 > 0 ? formatEuro(c.b2) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{c.b3 > 0 ? formatEuro(c.b3) : '-'}</td>
                        <td className="px-4 py-3 text-right text-slate-500">{c.b4 > 0 ? formatEuro(c.b4) : '-'}</td>
                        <td className="px-4 py-3 text-center">{c.hist}</td>
                        <td className="px-4 py-3 text-center">{c.avg}d</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Verwachte handelsinstroom */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Verwachte handelsinstroom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expectedARInflowWeeks} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: '#64748b' }}
                        tickFormatter={(val) => `€${val / 1000}k`}
                      />
                      <Tooltip
                        cursor={{ fill: '#f1f5f9' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: number, _name, props: any) => [
                          formatEuro(value),
                          `Week (${props?.payload?.month})`,
                        ]}
                      />
                      <Bar dataKey="value" fill="#64748b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
