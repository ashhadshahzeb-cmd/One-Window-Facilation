import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, FileSpreadsheet, Download, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { toast } from "sonner";

const RestrictedDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "kwsc@786") {
      setIsAuthenticated(true);
      toast.success("Access Granted");
    } else {
      toast.error("Incorrect Password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Card className="w-full max-w-md border-[#0ea5e9]/20 bg-[#09090b]/50 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-[#0ea5e9]" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Restricted Access</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">Please enter the administrative password to view the Daily Collection Statement.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/40 border-white/10 focus:border-[#0ea5e9]/50"
              />
              <Button type="submit" className="w-full bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white font-bold">
                Unlock Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const data = [
    { month: "JUL 2025", wsc: "1,897,843,243.83", wscc: "109,497,401.04", iacc: "2,007,340,644.87", total_rrg: "2,007,340,644.87", wtr: "291,521,006.35", isbc: "(1,668.00)", ccgwc: "-", as: "-", cssw: "37,879,896.84", toc: "329,399,235.19", total_kwsc: "2,337,039,879.06" },
    { month: "AUG 2025", wsc: "1,883,507,509.07", wscc: "247,538,008.00", iacc: "10,000,000.00", total_rrg: "2,131,045,508.07", wtr: "299,885,758.83", isbc: "-", ccgwc: "-", as: "(600.00)", cssw: "11,188,570.44", toc: "311,073,529.27", total_kwsc: "2,442,119,037.34" },
    { month: "SEP 2025", wsc: "1,972,017,909.23", wscc: "111,157,912.12", iacc: "97,185,101.54", total_rrg: "2,180,360,922.89", wtr: "322,736,412.99", isbc: "-", ccgwc: "-", as: "-", cssw: "31,097,646.44", toc: "353,834,059.43", total_kwsc: "2,534,194,982.32" },
    { month: "OCT 2025", wsc: "2,123,025,949.63", wscc: "44,013,472.00", iacc: "112,326,958.07", total_rrg: "2,279,366,379.70", wtr: "295,283,112.85", isbc: "-", ccgwc: "(174.95)", as: "-", cssw: "33,346,436.93", toc: "328,629,374.83", total_kwsc: "2,607,995,754.53" },
    { month: "NOV 2025", wsc: "1,599,197,575.12", wscc: "45,446,723.00", iacc: "199,813,027.64", total_rrg: "1,844,457,325.76", wtr: "303,413,541.70", isbc: "-", ccgwc: "-", as: "-", cssw: "22,865,494.90", toc: "326,279,036.60", total_kwsc: "2,170,736,362.36" },
    { month: "DEC 2025", wsc: "1,849,674,953.56", wscc: "59,257,458.02", iacc: "112,765,821.89", total_rrg: "2,021,698,233.47", wtr: "364,527,924.63", isbc: "-", ccgwc: "(174.95)", as: "-", cssw: "34,898,117.91", toc: "399,425,867.59", total_kwsc: "2,421,124,101.06" },
    { month: "JAN 2026", wsc: "1,760,228,911.83", wscc: "24,072,247.54", iacc: "73,918,862.52", total_rrg: "1,858,220,021.89", wtr: "357,087,707.25", isbc: "-", ccgwc: "-", as: "34,137,326.00", cssw: "37,369.59", toc: "381,252,758.84", total_kwsc: "2,239,472,780.73" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            Restricted Dashboard
          </h1>
          <p className="text-muted-foreground mt-1 font-medium">Daily Collection Statement - Finance Department</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-[#0ea5e9]/20 hover:bg-[#0ea5e9]/10">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <div className="px-4 py-2 rounded-lg bg-[#0ea5e9] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#0ea5e9]/20">
            <Calendar className="w-4 h-4" />
            FY 2025-26
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#09090b]/50 border-white/5 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total KW&SC Collection</p>
                <h3 className="text-2xl font-bold mt-1 text-[#0ea5e9]">22.91B</h3>
                <p className="text-xs text-emerald-500 font-medium mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12.4% from last month
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#0ea5e9]" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Add more summary cards if needed */}
      </div>

      <Card className="border-[#0ea5e9]/20 bg-[#09090b]/40 backdrop-blur-md overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-white/[0.02] flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-bold">Collection Statement (RRG & Others)</CardTitle>
          <div className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">Provisional Data</div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/[0.03]">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white py-4">Month & Year</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white">Water & Sewerage</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white">Connection Charges</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white">Arrear Collection</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-[#0ea5e9]">Total RRG</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white">Water Tanker</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-white">Sub Soil Water</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-wider text-[#0ea5e9]">Total Collection</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/[0.02] transition-colors">
                    <TableCell className="font-bold text-sm">{row.month}</TableCell>
                    <TableCell className="text-sm font-mono">{row.wsc}</TableCell>
                    <TableCell className="text-sm font-mono">{row.wscc}</TableCell>
                    <TableCell className="text-sm font-mono">{row.iacc}</TableCell>
                    <TableCell className="text-sm font-bold text-[#0ea5e9]">{row.total_rrg}</TableCell>
                    <TableCell className="text-sm font-mono">{row.wtr}</TableCell>
                    <TableCell className="text-sm font-mono">{row.cssw}</TableCell>
                    <TableCell className="text-sm font-bold text-[#0ea5e9]">{row.total_kwsc}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-[#0ea5e9]/5 border-t-2 border-[#0ea5e9]/20">
                  <TableCell className="font-black text-sm text-[#0ea5e9]">TOTAL</TableCell>
                  <TableCell className="font-bold text-sm font-mono">17,304,145,334.58</TableCell>
                  <TableCell className="font-bold text-sm font-mono">758,118,835.30</TableCell>
                  <TableCell className="font-bold text-sm font-mono">549,717,352.78</TableCell>
                  <TableCell className="font-black text-sm text-[#0ea5e9]">18,611,982,022.66</TableCell>
                  <TableCell className="font-bold text-sm font-mono">3,230,019,642.78</TableCell>
                  <TableCell className="font-bold text-sm font-mono">171,304,085.75</TableCell>
                  <TableCell className="font-black text-sm text-[#0ea5e9]">22,913,303,323.29</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="bg-[#09090b]/50 border-white/5 p-6">
          <h4 className="text-sm font-bold text-[#0ea5e9] mb-4 uppercase tracking-widest">Other Collections Breakdown</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-sm text-muted-foreground">Infra Structure Betterment</span>
              <span className="text-sm font-mono font-bold">(1,668.00)</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-sm text-muted-foreground">Commercial/Ground Water</span>
              <span className="text-sm font-mono font-bold">(349.90)</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-sm text-muted-foreground">Auction of Scrap</span>
              <span className="text-sm font-mono font-bold">14,137,326.00</span>
            </div>
          </div>
        </Card>
        
        <div className="flex flex-col justify-center items-center p-8 rounded-3xl bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/20 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-[#0ea5e9]" />
          </div>
          <h3 className="text-xl font-bold mb-2">Secure Financial Reporting</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            This dashboard contains provisional financial data for KW&SC. Access is restricted to authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestrictedDashboard;
