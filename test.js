const F=require('./calc.js');const a=(x,y,tol=1e-3)=>{if(Math.abs(x-y)/Math.abs(y)>tol)throw Error(x+' vs '+y)};
a(F.hall.RH(8.5e28),7.344e-11);a(F.hall.VH(1,10,8.5e28,1e-3),7.344e-7);a(F.hall.nFromVH(0.5,2,0.6e-3,0.5e-3),2.0807e25);
a(F.quantum.deBroglieV(100),1.2265e-10);a(F.quantum.boxE_eV(1,1e-9),0.37608);a(F.quantum.dvMin(1e-10),5.7886e5);
const C=F.torsion.C(8e10,0.5e-3,1);a(C,7.854e-3);const T=F.torsion.T(1e-3,C);a(T,2.2420);a(F.torsion.etaFromT(1e-3,T,0.5e-3,1),8e10);
console.log('All checks passed');
