### Roster Details<br />
Team Name: Phantom Academy<br />
Roster: Ader, Ayteel, parad17se<br />
Global Rank: [325](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [207]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  539.5<br />
<br />
Final Rank Value (539.5) = Starting Rank Value (541.5) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.5
- 400 + ( ( 0.074 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 541.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2872 | 2026-05-23 | G2 Ares    | L   | 0.484      | -            | -                | -                | -         |    -1.02 | Ader, Ayteel, Boll, Brain47, parad17se     |
|            4 |     4027 | 2026-04-19 | RBLS       | L   | 0.259      | -            | -                | -                | -         |    -1.38 | Ader, Ayteel, Brain47, chedzik, parad17se  |
|            3 |     4044 | 2026-04-19 | ImmuNe     | W   | 0.257      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.257) |     2.52 | Ader, Ayteel, Brain47, chedzik, parad17se  |
|            2 |     4050 | 2026-04-19 | Permitta   | L   | 0.256      | -            | -                | -                | -         |    -1.35 | Ader, Ayteel, Brain47, chedzik, parad17se  |
|            1 |     5105 | 2026-03-27 | NEW VISION | L   | 0.106      | -            | -                | -                | -         |    -0.85 | Ader, Ayteel, chedzik, gazela71, parad17se |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($961.80)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-23 |      0.484 | $1,741.00      | $842.48         |
| 2026-03-29 |      0.119 | $1,000.00      | $119.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
