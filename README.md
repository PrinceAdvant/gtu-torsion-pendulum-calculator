# GTU Physics 3110011 torsion and torsional pendulum calculator

Twisting couple, torsion or torsional pendulum came in all 9 official GTU Physics 3110011 papers in GTU Hero's count (Summer 2022 to Summer 2026), for 3 to 7 marks. Derivation yaad karo, numerical yahan check karo.

Live page: https://princeadvant.github.io/gtu-torsion-pendulum-calculator/

## Formulas

- Couple per unit twist C = π η r⁴ / (2 l)
- Torsional pendulum period T = 2π √(I / C)
- So η = 8 π I l / (T² r⁴)

## Test

`node test.js` checks the formulas against hand-worked values and prints `All checks passed`.

## Tips

- r is the radius, not the diameter. r⁴ makes this mistake very costly.
- Example values above are my own practice numbers, not from a GTU paper.

Repeat counts and old papers: [GTU Physics Paper Sem 1 and 2: PYQs on Repeat Mode](https://gtuhero.com/blogs/gtu-physics-paper-sem-1-2-pyq) (GTU Hero is my project).
