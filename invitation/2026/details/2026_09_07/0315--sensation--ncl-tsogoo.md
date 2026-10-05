### Roster Details<br />
Team Name: Sensation<br />
Roster: ncl, Tsogoo<br />
Global Rank: [315](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  566.7<br />
<br />
Final Rank Value (566.7) = Starting Rank Value (570.6) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.185[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.6
- 400 + ( ( 0.090 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 570.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3739 | 2026-04-27 | QuantumX | L   | 0.310      | -            | -                | -                | -         |    -4.30 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            4 |     3804 | 2026-04-26 | TYLOO    | L   | 0.304      | -            | -                | -                | -         |    -0.14 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            3 |     5526 | 2026-03-20 | The Huns | L   | 0.056      | -            | -                | -                | -         |    -0.30 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            2 |     5594 | 2026-03-18 | 5star    | W   | 0.045      | 0.308        | 0.008 (0.000)    | 0.322 (0.004)    | 1 (0.045) |     1.18 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            1 |     5658 | 2026-03-17 | NEXVOID  | L   | 0.036      | -            | -                | -                | -         |    -0.29 | hasteka, ncl, rate, Tsogoo, yAmi        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20.14)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      0.070 | $289.00        | $20.14          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
