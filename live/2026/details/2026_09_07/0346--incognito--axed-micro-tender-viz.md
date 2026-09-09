### Roster Details<br />
Team Name: Incognito<br />
Roster: Axed, micro, Tender, viz<br />
Global Rank: [346](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  514.3<br />
<br />
Final Rank Value (514.3) = Starting Rank Value (495.9) + Head To Head Adjustments (18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.9
- 400 + ( ( 0.050 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 495.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       42 | 2026-09-04 | Marsborne      | L   | 1.000      | -            | -                | -                | -         |    -3.13 | Axed, micro, oSee, PwnAlone, viz   |
|            7 |       43 | 2026-09-04 | Villainous     | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.195 (0.028)    | 0 (0.000) |    23.98 | Axed, micro, oSee, PwnAlone, viz   |
|            6 |      431 | 2026-08-26 | Zomblers       | L   | 1.000      | -            | -                | -                | -         |    -8.46 | AbbyDog, Axed, micro, Sathsea, viz |
|            5 |      494 | 2026-08-25 | Chicken Coop   | L   | 1.000      | -            | -                | -                | -         |    -3.23 | Axed, micro, Sathsea, Tender, viz  |
|            4 |     3486 | 2026-05-02 | M80            | L   | 0.346      | -            | -                | -                | -         |    -0.20 | Axed, Juna, micro, Tender, viz     |
|            3 |     3580 | 2026-04-30 | girl kissers   | W   | 0.334      | 0.354        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     5.08 | Axed, Juna, micro, Tender, viz     |
|            2 |     3665 | 2026-04-28 | Iowa Stormboar | L   | 0.321      | -            | -                | -                | -         |    -2.48 | Axed, Juna, micro, Tender, viz     |
|            1 |     3768 | 2026-04-26 | insane players | W   | 0.306      | 0.354        | 0.004 (0.000)    | 0.068 (0.007)    | 0 (0.000) |     6.91 | Axed, Juna, micro, Tender, viz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
