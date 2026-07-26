### Roster Details<br />
Team Name: DETONATE<br />
Roster: carN, chante, duhpe, Feral, tatm<br />
Global Rank: [260](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [64]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  646.6<br />
<br />
Final Rank Value (646.6) = Starting Rank Value (645.6) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.6
- 400 + ( ( 0.130 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 645.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.078
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      355 | 2026-06-19 | Villainous     | L   | 1.000      | -            | -                | -                | -         |   -10.73 | carN, chante, duhpe, Feral, tatm |
|            4 |      451 | 2026-06-13 | Iowa Stormboar | L   | 1.000      | -            | -                | -                | -         |   -10.15 | carN, chante, duhpe, Feral, tatm |
|            3 |      454 | 2026-06-13 | Wanted Goons   | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.172 (0.052)    | 0 (0.000) |    17.49 | carN, chante, duhpe, Feral, tatm |
|            2 |      499 | 2026-06-12 | Festina Lente  | L   | 1.000      | -            | -                | -                | -         |   -16.49 | carN, chante, duhpe, Feral, tatm |
|            1 |      533 | 2026-06-11 | Iowa Stormboar | W   | 0.994      | 0.303        | 0.012 (0.004)    | 0.432 (0.130)    | 0 (0.000) |    20.87 | carN, chante, duhpe, Feral, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,200.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-06-14 |      1.000 | $200.00        | $200.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
