const h=6.626e-34,m=9.109e-31,e=1.602e-19,PI=Math.PI;
const F={
 hall:{RH:(n)=>1/(n*e), VH:(B,I,n,t)=>B*I/(n*e*t), nFromVH:(B,I,VH,t)=>B*I/(VH*e*t)},
 quantum:{deBroglieV:(V)=>h/Math.sqrt(2*m*e*V), boxE_eV:(n,L)=>n*n*h*h/(8*m*L*L)/e, dvMin:(dx)=>h/(4*PI*dx)/m},
 torsion:{C:(eta,r,l)=>PI*eta*r**4/(2*l), T:(I,C)=>2*PI*Math.sqrt(I/C), etaFromT:(I,T,r,l)=>8*PI*I*l/(T*T*r**4)}
};
if(typeof module!=='undefined')module.exports=F;
