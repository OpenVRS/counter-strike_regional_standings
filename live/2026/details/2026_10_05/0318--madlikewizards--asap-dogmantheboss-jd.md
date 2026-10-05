### Roster Details<br />
Team Name: madlikewizards<br />
Roster: asap, DOGMANtheBOSS, JD<br />
Global Rank: [318](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  535.1<br />
<br />
Final Rank Value (535.1) = Starting Rank Value (499.9) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.9
- 400 + ( ( 0.050 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 499.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      857 | 2026-09-17 | 5dads     | L   | 1.000      | -            | -                | -                | -         |   -11.08 | asap, DANZ, DOGMANtheBOSS, JD, ju1ces |
|            4 |      922 | 2026-09-14 | LFO 8     | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.203 (0.051)    | 0 (0.000) |    17.74 | asap, DOGMANtheBOSS, JD, ju1ces, MC   |
|            3 |     1106 | 2026-09-10 | ex-Arcade | W   | 1.000      | 0.250        | 0.000 (0.000)    | 0.220 (0.055)    | 0 (0.000) |    17.54 | asap, DannyG, DANZ, DOGMANtheBOSS, JD |
|            2 |     1108 | 2026-09-10 | Abyssal   | L   | 1.000      | -            | -                | -                | -         |    -7.90 | asap, DANZ, DOGMANtheBOSS, JD, kragz  |
|            1 |     1444 | 2026-09-04 | LFO 8     | W   | 0.991      | 0.250        | 0.001 (0.000)    | 0.203 (0.050)    | 0 (0.000) |    18.83 | asap, DANZ, DOGMANtheBOSS, JD, ju1ces |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
