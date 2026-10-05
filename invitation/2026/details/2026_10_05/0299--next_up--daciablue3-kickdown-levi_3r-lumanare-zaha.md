### Roster Details<br />
Team Name: Next Up<br />
Roster: DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha<br />
Global Rank: [299](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [197]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  564.9<br />
<br />
Final Rank Value (564.9) = Starting Rank Value (566.7) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.7
- 400 + ( ( 0.083 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 566.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      164 | 2026-10-01 | Falcons Force | L   | 1.000      | -            | -                | -                | -         |    -6.69 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            7 |      167 | 2026-10-01 | ABT           | L   | 1.000      | -            | -                | -                | -         |   -11.78 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            6 |      175 | 2026-10-01 | aimclub       | L   | 1.000      | -            | -                | -                | -         |    -1.46 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            5 |      178 | 2026-10-01 | PURE          | L   | 1.000      | -            | -                | -                | -         |    -9.01 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            4 |      181 | 2026-10-01 | NAVI Junior   | W   | 1.000      | 0.349        | 0.006 (0.002)    | 0.546 (0.190)    | 1 (1.000) |    28.03 | DaciaBlue3, kickdown, Levi 3R, Lumanare, Zaha |
|            3 |     5381 | 2026-04-21 | fnatic        | L   | 0.088      | -            | -                | -                | -         |    -0.02 | ciordalesss, kickdown, Levi 3R, Zaha, zeking  |
|            2 |     5499 | 2026-04-14 | MOUZ NXT      | L   | 0.041      | -            | -                | -                | -         |    -0.73 | ciordalesss, kickdown, Levi 3R, Zaha, zeking  |
|            1 |     5526 | 2026-04-13 | Walczaki      | L   | 0.033      | -            | -                | -                | -         |    -0.10 | ciordalesss, kickdown, Levi 3R, Zaha, zeking  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
