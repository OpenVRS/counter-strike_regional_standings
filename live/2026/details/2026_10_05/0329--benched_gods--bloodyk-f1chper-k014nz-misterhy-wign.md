### Roster Details<br />
Team Name: benched gods<br />
Roster: BloodyK, f1chper, K014NZ, MisterHy, Wign<br />
Global Rank: [329](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [219]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  516.4<br />
<br />
Final Rank Value (516.4) = Starting Rank Value (509.6) + Head To Head Adjustments (6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 509.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4744 | 2026-05-08 | NEW VISION       | L   | 0.200      | -            | -                | -                | -         |    -2.42 | BloodyK, f1chper, K014NZ, MisterHy, Wign |
|            4 |     4765 | 2026-05-07 | M1X KS           | W   | 0.193      | 0.303        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.78 | BloodyK, f1chper, K014NZ, MisterHy, Wign |
|            3 |     4783 | 2026-05-06 | ex-Zero Tenacity | W   | 0.186      | 0.303        | 0.037 (0.002)    | 1.000 (0.056)    | 0 (0.000) |     5.41 | BloodyK, f1chper, K014NZ, MisterHy, Wign |
|            2 |     4818 | 2026-05-04 | playersclub      | W   | 0.172      | 0.303        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.64 | BloodyK, f1chper, K014NZ, MisterHy, Wign |
|            1 |     4845 | 2026-05-03 | BRUTE            | L   | 0.166      | -            | -                | -                | -         |    -1.59 | BloodyK, f1chper, K014NZ, MisterHy, Wign |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
