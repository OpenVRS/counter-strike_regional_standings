### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [333](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [213]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  562.7<br />
<br />
Final Rank Value (562.7) = Starting Rank Value (578.8) + Head To Head Adjustments (-16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.148[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.8
- 400 + ( ( 0.092 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 578.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3533 | 2026-04-01 | Grindas            | L   | 0.373      | -            | -                | -                | -         |    -7.18 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           15 |     3626 | 2026-03-31 | EXSAD              | W   | 0.366      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.22 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           14 |     3686 | 2026-03-30 | The Last Resort    | L   | 0.360      | -            | -                | -                | -         |    -0.75 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           13 |     4229 | 2026-03-21 | Leo                | L   | 0.301      | -            | -                | -                | -         |    -2.71 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           12 |     4313 | 2026-03-20 | Black Phoenix      | L   | 0.292      | -            | -                | -                | -         |    -1.27 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           11 |     4441 | 2026-03-17 | Persona Grata      | L   | 0.272      | -            | -                | -                | -         |    -4.62 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           10 |     5223 | 2026-03-01 | PsychoFace         | L   | 0.166      | -            | -                | -                | -         |    -0.28 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            9 |     5378 | 2026-02-26 | Fuzos              | L   | 0.146      | -            | -                | -                | -         |    -1.87 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            8 |     5982 | 2026-02-14 | Let Her Cook       | L   | 0.068      | -            | -                | -                | -         |    -1.04 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            7 |     6007 | 2026-02-14 | Clutchain fe       | L   | 0.067      | -            | -                | -                | -         |    -0.68 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            6 |     6046 | 2026-02-13 | Fingers Crossed fe | W   | 0.062      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.93 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            5 |     6121 | 2026-02-12 | Hashiras           | L   | 0.052      | -            | -                | -                | -         |    -0.50 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            4 |     6137 | 2026-02-11 | Let Her Cook       | W   | 0.048      | 0.384        | 0.001 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.78 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            3 |     6183 | 2026-02-10 | confidence         | W   | 0.041      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.49 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            2 |     6197 | 2026-02-10 | Romania            | L   | 0.039      | -            | -                | -                | -         |    -0.56 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            1 |     6209 | 2026-02-09 | los kogutos        | L   | 0.034      | -            | -                | -                | -         |    -0.16 | aiM, ASTRA, Emmsan, Hanka, sosya  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($148.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.074 | $2,000.00      | $148.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
