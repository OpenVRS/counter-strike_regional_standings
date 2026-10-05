### Roster Details<br />
Team Name: Teletubisie<br />
Roster: byali, dycha, mASKED, Sobol<br />
Global Rank: [262](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  628.0<br />
<br />
Final Rank Value (628.0) = Starting Rank Value (566.9) + Head To Head Adjustments (61.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.9
- 400 + ( ( 0.083 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 566.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      720 | 2026-09-20 | STATE            | L   | 1.000      | -            | -                | -                | -         |    -5.37 | byali, dycha, hades, mASKED, Sobol   |
|            6 |      737 | 2026-09-19 | Falcons Force    | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.460 (0.170)    | 0 (0.000) |    24.93 | byali, dycha, hades, mASKED, Sobol   |
|            5 |      853 | 2026-09-17 | Vexar            | L   | 1.000      | -            | -                | -                | -         |    -7.36 | byali, dycha, hades, mASKED, Sobol   |
|            4 |      892 | 2026-09-16 | ex-Zero Tenacity | W   | 1.000      | 0.371        | 0.037 (0.014)    | 1.000 (0.371)    | 0 (0.000) |    29.09 | byali, dycha, hades, mASKED, Sobol   |
|            3 |      944 | 2026-09-14 | Saint Sinners    | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.424 (0.157)    | 0 (0.000) |    24.49 | byali, dycha, mASKED, POLO, Sobol    |
|            2 |     1094 | 2026-09-11 | Honvéd           | L   | 1.000      | -            | -                | -                | -         |    -4.40 | byali, dycha, mASKED, POLO, Sobol    |
|            1 |     1616 | 2026-08-30 | fnatic           | L   | 0.961      | -            | -                | -                | -         |    -0.23 | dycha, gwizdakk, mASKED, POLO, Sobol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
