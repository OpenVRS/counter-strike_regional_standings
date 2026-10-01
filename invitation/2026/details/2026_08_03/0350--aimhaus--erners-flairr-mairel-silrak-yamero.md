### Roster Details<br />
Team Name: Aimhaus<br />
Roster: erners, flairr, Mairel, silrak, Yamero<br />
Global Rank: [350](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [225]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  516.2<br />
<br />
Final Rank Value (516.2) = Starting Rank Value (528.7) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.7
- 400 + ( ( 0.066 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 528.7


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
|            9 |      742 | 2026-06-29 | BERG          | L   | 0.965      | -            | -                | -                | -         |    -3.63 | blazekiNho, flairr, nisker, silrak, Yamero |
|            8 |      764 | 2026-06-28 | Coalesce      | L   | 0.959      | -            | -                | -                | -         |   -10.76 | blazekiNho, flairr, nisker, silrak, Yamero |
|            7 |      768 | 2026-06-28 | GAMEHARMONY   | W   | 0.959      | 0.303        | 0.000 (0.000)    | 0.020 (0.006)    | 1 (0.959) |    14.42 | blazekiNho, flairr, nisker, silrak, Yamero |
|            6 |      769 | 2026-06-28 | Leo           | L   | 0.959      | -            | -                | -                | -         |    -2.07 | blazekiNho, flairr, nisker, silrak, Yamero |
|            5 |     3640 | 2026-03-31 | BESTIA        | L   | 0.365      | -            | -                | -                | -         |    -0.38 | erners, flairr, Mairel, silrak, Yamero     |
|            4 |     3641 | 2026-03-31 | Sashi Academy | L   | 0.365      | -            | -                | -                | -         |    -7.36 | erners, flairr, Mairel, silrak, Yamero     |
|            3 |     3642 | 2026-03-31 | Falcons Force | L   | 0.365      | -            | -                | -                | -         |    -2.35 | erners, flairr, Mairel, silrak, Yamero     |
|            2 |     3643 | 2026-03-31 | 3DMAX         | L   | 0.365      | -            | -                | -                | -         |    -0.06 | erners, flairr, Mairel, silrak, Yamero     |
|            1 |     3644 | 2026-03-31 | EAC           | L   | 0.365      | -            | -                | -                | -         |    -0.34 | erners, flairr, Mairel, silrak, Yamero     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
