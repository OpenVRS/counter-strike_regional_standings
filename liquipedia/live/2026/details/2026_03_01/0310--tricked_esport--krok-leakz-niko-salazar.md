### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: kroK, Leakz, niko, salazar<br />
Global Rank: [310](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  489.3<br />
<br />
Final Rank Value (489.3) = Starting Rank Value (485.4) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.4
- 400 + ( ( 0.045 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 485.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4766 | 2025-09-16 | FAVBET Team         | L   | 0.086      | -            | -                | -                | -         |    -0.18 | anber, kroK, Leakz, niko, salazar  |
|            6 |     4849 | 2025-09-14 | Ex-Zero Tenacity    | W   | 0.071      | 0.435        | 0.002 (0.000)    | 0.210 (0.006)    | 0 (0.000) |     1.80 | anber, kroK, Leakz, niko, salazar  |
|            5 |     4922 | 2025-09-12 | OG                  | L   | 0.060      | -            | -                | -                | -         |    -0.16 | kroK, Leakz, niko, Nodios, salazar |
|            4 |     4978 | 2025-09-11 | AaB esport          | W   | 0.053      | 0.435        | 0.001 (0.000)    | 0.132 (0.003)    | 0 (0.000) |     1.30 | anber, kroK, Leakz, niko, salazar  |
|            3 |     5026 | 2025-09-10 | Team Spirit Academy | W   | 0.047      | 0.384        | 0.010 (0.000)    | 0.073 (0.001)    | 0 (0.000) |     1.19 | kroK, Leakz, niko, Nodios, salazar |
|            2 |     5039 | 2025-09-10 | Team Nemesis        | L   | 0.045      | -            | -                | -                | -         |    -0.01 | anber, kroK, Leakz, niko, salazar  |
|            1 |     5122 | 2025-09-08 | JiJieHao            | L   | 0.034      | -            | -                | -                | -         |    -0.07 | kroK, Leakz, niko, Nodios, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
