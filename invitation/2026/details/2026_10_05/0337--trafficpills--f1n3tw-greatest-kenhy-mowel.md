### Roster Details<br />
Team Name: TrafficPills<br />
Roster: F1n3tw, GREATEST, KENHY, MoWeL<br />
Global Rank: [337](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [224]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  503.3<br />
<br />
Final Rank Value (503.3) = Starting Rank Value (506.3) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.3
- 400 + ( ( 0.053 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 506.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      793 | 2026-09-18 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -1.57 | F1n3tw, GREATEST, KENHY, Minor, MoWeL |
|            4 |      880 | 2026-09-16 | KAMUI            | L   | 1.000      | -            | -                | -                | -         |    -8.27 | F1n3tw, GREATEST, KENHY, Minor, MoWeL |
|            3 |      996 | 2026-09-13 | Phantom Academy  | L   | 1.000      | -            | -                | -                | -         |    -7.82 | F1n3tw, GREATEST, KENHY, Minor, MoWeL |
|            2 |     1087 | 2026-09-11 | Falcons Force    | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.460 (0.170)    | 0 (0.000) |    27.69 | F1n3tw, GREATEST, KENHY, Minor, MoWeL |
|            1 |     1992 | 2026-08-21 | Younglings       | L   | 0.900      | -            | -                | -                | -         |   -13.02 | F1n3tw, GREATEST, KENHY, LECY, MoWeL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
