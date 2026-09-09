### Roster Details<br />
Team Name: THE UNIT<br />
Roster: ad0rfin, kyrosawa, nesh<br />
Global Rank: [177](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [14]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  735.8<br />
<br />
Final Rank Value (735.8) = Starting Rank Value (722.8) + Head To Head Adjustments (13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.8
- 400 + ( ( 0.170 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 722.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1182 | 2026-08-02 | DEPO           | L   | 0.951      | -            | -                | -                | -         |    -2.94 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            5 |     1199 | 2026-08-01 | Trouble makers | W   | 0.946      | 0.342        | 0.001 (0.000)    | 0.037 (0.012)    | 1 (0.946) |    11.65 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            4 |     1210 | 2026-08-01 | Omega          | L   | 0.945      | -            | -                | -                | -         |    -2.26 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            3 |     1217 | 2026-08-01 | Trouble makers | W   | 0.944      | 0.342        | 0.001 (0.000)    | 0.037 (0.012)    | 1 (0.944) |    12.11 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            2 |     4093 | 2026-04-18 | DNK            | L   | 0.245      | -            | -                | -                | -         |    -5.07 | ad0rfin, imyGDx, kyrosawa, nesh, nursSSS    |
|            1 |     4098 | 2026-04-18 | DEPO           | L   | 0.244      | -            | -                | -                | -         |    -0.48 | ad0rfin, imyGDx, kyrosawa, nesh, nursSSS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,013.97)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.952 | $1,000.00      | $951.84         |
| 2026-04-19 |      0.252 | $247.00        | $62.12          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
