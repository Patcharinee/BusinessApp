import React, { useState, useMemo } from 'react';
import { Percent, Target, TrendingUp, HelpCircle, Wallet } from 'lucide-react';

// Tooltip Component
const Tooltip = ({ children, tooltipText }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <div 
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
                onClick={() => setShowTooltip(!showTooltip)}
            >
                {children}
                <HelpCircle 
                    size={16} 
                    style={{ marginLeft: '8px', opacity: 0.7 }}
                />
            </div>
            {showTooltip && (
                <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1f2937',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    zIndex: 1000,
                    marginBottom: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    {tooltipText}
                </div>
            )}
        </div>
    );
};

const App = () => {
    const [fixedCosts, setFixedCosts] = useState('');
    const [variableCosts, setVariableCosts] = useState('');
    const [units, setUnits] = useState('10');
    const [desiredMargin, setDesiredMargin] = useState('20');
    const [customSellingPrice, setCustomSellingPrice] = useState('');

    const totalCostPerUnit = useMemo(() => {
        const fc = parseFloat(fixedCosts) || 0;
        const vc = parseFloat(variableCosts) || 0;
        const u = parseInt(units, 10) || 1;
        if (u === 0) return vc;
        return (fc / u) + vc;
    }, [fixedCosts, variableCosts, units]);

    const suggestedSellingPrice = useMemo(() => {
        const margin = parseFloat(desiredMargin) || 0;
        return totalCostPerUnit * (1 + margin / 100);
    }, [totalCostPerUnit, desiredMargin]);

    const finalSellingPrice = useMemo(() => {
        return customSellingPrice !== '' ? parseFloat(customSellingPrice) : suggestedSellingPrice;
    }, [customSellingPrice, suggestedSellingPrice]);

    const profitPerUnit = useMemo(() => {
        return finalSellingPrice - totalCostPerUnit;
    }, [finalSellingPrice, totalCostPerUnit]);

    const totalNetProfit = useMemo(() => {
        const u = parseInt(units, 10) || 0;
        return profitPerUnit * u;
    }, [profitPerUnit, units]);

    const totalCost = useMemo(() => {
        const fc = parseFloat(fixedCosts) || 0;
        const vc = parseFloat(variableCosts) || 0;
        const u = parseInt(units, 10) || 0;
        return fc + (vc * u);
    }, [fixedCosts, variableCosts, units]);

    const totalRevenue = useMemo(() => {
        const u = parseInt(units, 10) || 0;
        return finalSellingPrice * u;
    }, [finalSellingPrice, units]);

    const breakEvenUnits = useMemo(() => {
        const fc = parseFloat(fixedCosts) || 0;
        const profit = profitPerUnit;
        if (profit <= 0) return Infinity;
        return fc / profit;
    }, [fixedCosts, profitPerUnit]);

    const formatCurrency = (value) => {
        if (isNaN(value) || !isFinite(value)) {
            return '฿0.00';
        }
        return '฿' + value.toLocaleString('th-TH', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    const formatCurrency3Decimals = (value) => {
        if (isNaN(value) || !isFinite(value)) {
            return '฿0.000';
        }
        // Round up to 3 decimal places
        const roundedValue = Math.ceil(value * 1000) / 1000;
        return '฿' + roundedValue.toLocaleString('th-TH', { 
            minimumFractionDigits: 3, 
            maximumFractionDigits: 3 
        });
    };

    const formatCurrency2DecimalsRoundUp = (value) => {
        if (isNaN(value) || !isFinite(value)) {
            return '฿0.00';
        }
        // Round up to 2 decimal places
        const roundedValue = Math.ceil(value * 100) / 100;
        return '฿' + roundedValue.toLocaleString('th-TH', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    return (
        <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif', color: '#1f2937'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
                <header style={{textAlign: 'center', marginBottom: '32px'}}>
                    <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#1f2937'}}>เครื่องคิดกำไรธุรกิจ</h1>
                    <p style={{fontSize: '18px', color: '#6b7280', marginTop: '8px'}}>วิเคราะห์ต้นทุน เสนอการตั้งราคา และคาดการณ์ผลตอบแทนจากการลงทุน</p>
                </header>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px'}}>
                    {/* Input Section */}
                    <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'}}>
                        <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px'}}>ข้อมูลธุรกิจของคุณ</h2>
                        
                        <div style={{marginBottom: '24px'}}>
                            <Tooltip tooltipText="ต้นทุนที่ไม่เปลี่ยนแปลงตามจำนวนสินค้าที่ผลิต เช่น ค่าเช่า เงินเดือน ค่าประกัน">
                                <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>ต้นทุนคงที่ทั้งหมด</label>
                            </Tooltip>
                            <input
                                type="number"
                                value={fixedCosts}
                                onChange={(e) => setFixedCosts(e.target.value)}
                                placeholder="เช่น 5000"
                                style={{width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px'}}
                            />
                        </div>

                        <div style={{marginBottom: '24px'}}>
                            <Tooltip tooltipText="ต้นทุนที่เปลี่ยนแปลงตามจำนวนสินค้าที่ผลิต เช่น วัตถุดิบ แรงงานต่อชิ้น">
                                <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>ต้นทุนผันแปรต่อหน่วย</label>
                            </Tooltip>
                            <input
                                type="number"
                                value={variableCosts}
                                onChange={(e) => setVariableCosts(e.target.value)}
                                placeholder="เช่น 15"
                                style={{width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px'}}
                            />
                        </div>

                        <div style={{marginBottom: '24px'}}>
                            <Tooltip tooltipText="จำนวนสินค้าที่คุณวางแผนจะผลิตและขายในระยะเวลาหนึ่ง">
                                <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>จำนวนหน่วยสินค้าที่ต้องการผลิต</label>
                            </Tooltip>
                            <input
                                type="number"
                                value={units}
                                onChange={(e) => setUnits(e.target.value)}
                                placeholder="เช่น 10"
                                style={{width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px'}}
                            />
                        </div>

                        <div style={{marginBottom: '24px'}}>
                            <Tooltip tooltipText="เปอร์เซ็นต์กำไรที่คุณต้องการทำจากต้นทุนต่อหน่วย">
                                <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>อัตรากำไรที่ต้องการ (%)</label>
                            </Tooltip>
                            <input
                                type="number"
                                value={desiredMargin}
                                onChange={(e) => setDesiredMargin(e.target.value)}
                                placeholder="เช่น 20"
                                style={{width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px'}}
                            />
                        </div>
                    </div>

                    {/* Results Section */}
                    <div>
                        <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', marginBottom: '32px'}}>
                            <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '8px'}}>กลยุทธ์การตั้งราคา</h2>
                            <p style={{color: '#6b7280', marginBottom: '24px'}}>เราแนะนำการตั้งราคาสินค้าเพื่อให้ได้อัตรากำไรที่คุณต้องการ</p>
                            
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                                <div>
                                    <Tooltip tooltipText="ราคาขายสินค้าที่แนะนำตามอัตรากำไรที่คุณต้องการ">
                                        <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>ราคาขายที่แนะนำ</label>
                                    </Tooltip>
                                    <div style={{padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '6px', fontSize: '20px', fontWeight: 'bold'}}>
                                        {formatCurrency2DecimalsRoundUp(suggestedSellingPrice)}
                                    </div>
                                </div>
                                <div>
                                    <Tooltip tooltipText="ราคาขายสินค้าที่คุณต้องการตั้งเอง (ถ้าไม่ใส่จะใช้ราคาที่แนะนำ)">
                                        <label style={{fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px'}}>ราคาที่คุณต้องการขายสินค้า</label>
                                    </Tooltip>
                                    <input
                                        type="number"
                                        value={customSellingPrice}
                                        onChange={(e) => setCustomSellingPrice(e.target.value)}
                                        placeholder="ป้อนราคาที่ต้องการ"
                                        style={{width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '20px', fontWeight: 'bold'}}
                                    />
                                </div>
                            </div>
                        </div>

                        <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px'}}>ผลการคำนวณ</h2>
                        
                        {/* Big Picture Section */}
                        <div style={{marginBottom: '32px'}}>
                            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#374151'}}>ภาพรวมธุรกิจ</h3>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
                                <div style={{backgroundColor: '#10b981', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="รายได้รวมทั้งหมดจากการขายสินค้าทุกหน่วยในราคาที่ตั้งไว้">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>รายได้รวมทั้งหมด</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency(totalRevenue)}</div>
                                </div>
                                <div style={{backgroundColor: totalNetProfit >= 0 ? '#059669' : '#dc2626', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="กำไรรวมหลังจากขายสินค้าทั้งหมดและหักต้นทุนทั้งหมดแล้ว">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>กำไรสุทธิรวม</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency(totalNetProfit)}</div>
                                </div>
                                <div style={{backgroundColor: '#ca8a04', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="จำนวนหน่วยที่ต้องขายเพื่อให้รายได้เท่ากับต้นทุนคงที่ทั้งหมด">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>จุดคุ้มทุน</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{isFinite(breakEvenUnits) ? Math.ceil(breakEvenUnits).toLocaleString() + ' หน่วย' : 'ไม่มีจุดคุ้มทุน'}</div>
                                </div>
                                <div style={{backgroundColor: '#3b82f6', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="ต้นทุนรวมทั้งหมดสำหรับการผลิตสินค้าจำนวนที่ต้องการ รวมต้นทุนคงที่และต้นทุนผันแปร">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>ต้นทุนรวมทั้งหมด</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency(totalCost)}</div>
                                </div>
                            </div>
                        </div>

                        {/* Per Unit Section */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#374151'}}>รายละเอียดต่อสินค้าหนึ่งหน่วย</h3>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
                                <div style={{backgroundColor: '#8b5cf6', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="ราคาขายสินค้าต่อหน่วยที่ใช้ในการคำนวณ (ราคาที่คุณตั้งหรือราคาที่แนะนำ)">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>ราคาขายสินค้า</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{customSellingPrice ? `฿${customSellingPrice}` : `${formatCurrency2DecimalsRoundUp(suggestedSellingPrice)} (ราคาแนะนำ)`}</div>
                                </div>
                                <div style={{backgroundColor: profitPerUnit >= 0 ? '#10b981' : '#dc2626', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="กำไรที่ได้จากการขายสินค้าหนึ่งหน่วยหลังจากหักต้นทุนแล้ว">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>กำไรต่อหน่วย</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency(profitPerUnit)}</div>
                                </div>
                                <div style={{backgroundColor: '#ca8a04', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="ราคาขายสินค้าต่ำสุดที่ตั้งได้เพื่อครอบคลุมต้นทุนทั้งหมด โดยยังไม่ได้กำไร">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>ราคาทุน</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency2DecimalsRoundUp(totalCostPerUnit)}</div>
                                </div>
                                <div style={{backgroundColor: '#ef4444', color: 'white', padding: '20px', borderRadius: '8px'}}>
                                    <Tooltip tooltipText="ต้นทุนรวมต่อหน่วยสินค้าหนึ่งชิ้น รวมต้นทุนคงที่และต้นทุนผันแปร">
                                        <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>ต้นทุนต่อหน่วย</h3>
                                    </Tooltip>
                                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>{formatCurrency2DecimalsRoundUp(totalCostPerUnit)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer style={{textAlign: 'center', marginTop: '48px', padding: '24px', borderTop: '1px solid #e5e7eb'}}>
                    <p style={{color: '#6b7280'}}>หมายเหตุ: เครื่องคำนวณนี้ใช้สำหรับการประมาณการเบื้องต้นเท่านั้น</p>
                </footer>
            </div>
        </div>
    );
};

export default App; 