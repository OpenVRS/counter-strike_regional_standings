### Roster Details<br />
Team Name: DETONATE<br />
Roster: carN, chante, duhpe, Feral, tatm<br />
Global Rank: [282](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [66]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  638.9<br />
<br />
Final Rank Value (638.9) = Starting Rank Value (644.2) + Head To Head Adjustments (-5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.2
- 400 + ( ( 0.126 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 644.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      894 | 2026-06-19 | Villainous     | L   | 0.902      | -            | -                | -                | -         |    -9.11 | carN, chante, duhpe, Feral, tatm |
|            4 |      988 | 2026-06-13 | Iowa Stormboar | L   | 0.862      | -            | -                | -                | -         |   -13.67 | carN, chante, duhpe, Feral, tatm |
|            3 |      992 | 2026-06-13 | Wanted Goons   | W   | 0.861      | 0.303        | 0.000 (0.000)    | 0.160 (0.042)    | 0 (0.000) |    14.76 | carN, chante, duhpe, Feral, tatm |
|            2 |     1037 | 2026-06-12 | Festina Lente  | L   | 0.856      | -            | -                | -                | -         |   -14.45 | carN, chante, duhpe, Feral, tatm |
|            1 |     1072 | 2026-06-11 | Iowa Stormboar | W   | 0.850      | 0.303        | 0.010 (0.003)    | 0.324 (0.084)    | 0 (0.000) |    17.17 | carN, chante, duhpe, Feral, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,089.69)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      0.916 | $1,000.00      | $915.99         |
| 2026-06-14 |      0.868 | $200.00        | $173.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
