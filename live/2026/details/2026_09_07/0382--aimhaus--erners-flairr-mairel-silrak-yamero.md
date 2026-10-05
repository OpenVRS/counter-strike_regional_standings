### Roster Details<br />
Team Name: Aimhaus<br />
Roster: erners, flairr, Mairel, silrak, Yamero<br />
Global Rank: [382](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [241]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  431.5<br />
<br />
Final Rank Value (431.5) = Starting Rank Value (438.7) + Head To Head Adjustments (-7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.020<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 438.7
- 400 + ( ( 0.020 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 438.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1949 | 2026-06-29 | BERG          | L   | 0.730      | -            | -                | -                | -         |    -2.58 | blazekiNho, flairr, nisker, silrak, Yamero |
|            8 |     1971 | 2026-06-28 | Coalesce      | L   | 0.724      | -            | -                | -                | -         |    -9.88 | blazekiNho, flairr, nisker, silrak, Yamero |
|            7 |     1975 | 2026-06-28 | GAMEHARMONY   | W   | 0.724      | 0.303        | 0.000 (0.000)    | 0.003 (0.001)    | 1 (0.724) |     9.97 | blazekiNho, flairr, nisker, silrak, Yamero |
|            6 |     1976 | 2026-06-28 | Leo           | L   | 0.723      | -            | -                | -                | -         |    -1.45 | blazekiNho, flairr, nisker, silrak, Yamero |
|            5 |     4847 | 2026-03-31 | BESTIA        | L   | 0.130      | -            | -                | -                | -         |    -0.23 | erners, flairr, Mairel, silrak, Yamero     |
|            4 |     4848 | 2026-03-31 | Sashi Academy | L   | 0.130      | -            | -                | -                | -         |    -2.22 | erners, flairr, Mairel, silrak, Yamero     |
|            3 |     4849 | 2026-03-31 | Falcons Force | L   | 0.130      | -            | -                | -                | -         |    -0.72 | erners, flairr, Mairel, silrak, Yamero     |
|            2 |     4850 | 2026-03-31 | 3DMAX         | L   | 0.130      | -            | -                | -                | -         |    -0.03 | erners, flairr, Mairel, silrak, Yamero     |
|            1 |     4851 | 2026-03-31 | EAC           | L   | 0.130      | -            | -                | -                | -         |    -0.07 | erners, flairr, Mairel, silrak, Yamero     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
