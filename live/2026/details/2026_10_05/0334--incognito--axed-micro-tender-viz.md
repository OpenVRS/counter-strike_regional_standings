### Roster Details<br />
Team Name: Incognito<br />
Roster: Axed, micro, Tender, viz<br />
Global Rank: [334](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [73]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  507.5<br />
<br />
Final Rank Value (507.5) = Starting Rank Value (494.6) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.6
- 400 + ( ( 0.047 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 494.6


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
|            8 |     1390 | 2026-09-04 | Marsborne      | L   | 0.997      | -            | -                | -                | -         |    -2.25 | Axed, micro, oSee, PwnAlone, viz   |
|            7 |     1391 | 2026-09-04 | Villainous     | W   | 0.996      | 0.143        | 0.003 (0.000)    | 0.219 (0.031)    | 0 (0.000) |    23.63 | Axed, micro, oSee, PwnAlone, viz   |
|            6 |     1811 | 2026-08-26 | Zomblers       | L   | 0.936      | -            | -                | -                | -         |    -8.74 | AbbyDog, Axed, micro, Sathsea, viz |
|            5 |     1874 | 2026-08-25 | Chicken Coop   | L   | 0.928      | -            | -                | -                | -         |    -3.55 | Axed, micro, Sathsea, Tender, viz  |
|            4 |     4866 | 2026-05-02 | M80            | L   | 0.161      | -            | -                | -                | -         |    -0.02 | Axed, Juna, micro, Tender, viz     |
|            3 |     4960 | 2026-04-30 | girl kissers   | W   | 0.149      | 0.354        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.24 | Axed, Juna, micro, Tender, viz     |
|            2 |     5045 | 2026-04-28 | Iowa Stormboar | L   | 0.136      | -            | -                | -                | -         |    -0.96 | Axed, Juna, micro, Tender, viz     |
|            1 |     5148 | 2026-04-26 | insane players | W   | 0.121      | 0.354        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.50 | Axed, Juna, micro, Tender, viz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
