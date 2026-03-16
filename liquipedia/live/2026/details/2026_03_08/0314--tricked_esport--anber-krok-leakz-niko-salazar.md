### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: anber, kroK, Leakz, niko, salazar<br />
Global Rank: [314](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  476.8<br />
<br />
Final Rank Value (476.8) = Starting Rank Value (476.1) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.158[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 476.1
- 400 + ( ( 0.040 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 476.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.002
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4673 | 2025-09-24 | Alliance            | L   | 0.097      | -            | -                | -                | -         |    -0.03 | kroK, Leakz, Nodios, salazar, valde |
|            8 |     4701 | 2025-09-22 | Ex-Fingers Crossed  | L   | 0.085      | -            | -                | -                | -         |    -0.19 | kroK, Leakz, Nodios, salazar, valde |
|            7 |     4851 | 2025-09-17 | Oramond             | L   | 0.052      | -            | -                | -                | -         |    -0.10 | anber, kroK, Leakz, niko, salazar   |
|            6 |     4886 | 2025-09-16 | FAVBET Team         | L   | 0.045      | -            | -                | -                | -         |    -0.09 | anber, kroK, Leakz, niko, salazar   |
|            5 |     4969 | 2025-09-14 | Ex-Zero Tenacity    | W   | 0.030      | 0.435        | 0.002 (0.000)    | 0.333 (0.004)    | 0 (0.000) |     0.76 | anber, kroK, Leakz, niko, salazar   |
|            4 |     5042 | 2025-09-12 | OG                  | L   | 0.019      | -            | -                | -                | -         |    -0.05 | kroK, Leakz, niko, Nodios, salazar  |
|            3 |     5098 | 2025-09-11 | AaB esport          | W   | 0.011      | 0.435        | 0.001 (0.000)    | 0.082 (0.000)    | 0 (0.000) |     0.27 | anber, kroK, Leakz, niko, salazar   |
|            2 |     5148 | 2025-09-10 | Team Spirit Academy | W   | 0.006      | 0.384        | 0.010 (0.000)    | 0.061 (0.000)    | 0 (0.000) |     0.14 | kroK, Leakz, niko, Nodios, salazar  |
|            1 |     5161 | 2025-09-10 | Team Nemesis        | L   | 0.004      | -            | -                | -                | -         |    -0.00 | anber, kroK, Leakz, niko, salazar   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
