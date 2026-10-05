### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [360](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [82]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  467.5<br />
<br />
Final Rank Value (467.5) = Starting Rank Value (467.8) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.124[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.034<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 467.8
- 400 + ( ( 0.034 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 467.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5080 | 2026-04-27 | Wanted Goons | L   | 0.130      | -            | -                | -                | -         |    -0.97 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|            7 |     5130 | 2026-04-26 | ex-Aether    | L   | 0.123      | -            | -                | -                | -         |    -1.11 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     5200 | 2026-04-25 | LAG          | L   | 0.116      | -            | -                | -                | -         |    -0.13 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     5204 | 2026-04-25 | KODEX        | W   | 0.115      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.115) |     1.47 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     5220 | 2026-04-25 | LAG          | L   | 0.115      | -            | -                | -                | -         |    -0.13 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     5475 | 2026-04-15 | regain       | L   | 0.049      | -            | -                | -                | -         |    -0.20 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     5530 | 2026-04-12 | Aether       | W   | 0.030      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.62 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     5608 | 2026-04-09 | Clockwork    | W   | 0.010      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
