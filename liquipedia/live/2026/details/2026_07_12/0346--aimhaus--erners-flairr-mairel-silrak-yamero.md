### Roster Details<br />
Team Name: Aimhaus<br />
Roster: erners, flairr, mairel, silrak, Yamero<br />
Global Rank: [346](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [217]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  509.1<br />
<br />
Final Rank Value (509.1) = Starting Rank Value (527.5) + Head To Head Adjustments (-18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 527.5
- 400 + ( ( 0.067 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 527.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.039
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      207 | 2026-06-29 | Esport BERG               | L   | 1.000      | -            | -                | -                | -         |    -6.53 | blazekiNho, flairr, nisker, silrak, Yamero |
|            8 |      226 | 2026-06-28 | Ex-Coalesce               | L   | 1.000      | -            | -                | -                | -         |   -11.02 | blazekiNho, flairr, nisker, silrak, Yamero |
|            7 |      230 | 2026-06-28 | GAMEHARMONY               | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.028 (0.008)    | 1 (1.000) |    15.89 | blazekiNho, flairr, nisker, silrak, Yamero |
|            6 |      231 | 2026-06-28 | Leo Team                  | L   | 1.000      | -            | -                | -                | -         |    -2.21 | blazekiNho, flairr, nisker, silrak, Yamero |
|            5 |     3033 | 2026-03-31 | BESTIA                    | L   | 0.512      | -            | -                | -                | -         |    -0.39 | erners, flairr, mairel, silrak, Yamero     |
|            4 |     3037 | 2026-03-31 | Sashi Academy             | L   | 0.512      | -            | -                | -                | -         |   -10.16 | erners, flairr, mairel, silrak, Yamero     |
|            3 |     3062 | 2026-03-31 | Falcons Force             | L   | 0.511      | -            | -                | -                | -         |    -3.32 | erners, flairr, mairel, silrak, Yamero     |
|            2 |     3081 | 2026-03-31 | 3DMAX                     | L   | 0.510      | -            | -                | -                | -         |    -0.16 | erners, flairr, mairel, silrak, Yamero     |
|            1 |     3093 | 2026-03-31 | Esport Academy Copenhagen | L   | 0.510      | -            | -                | -                | -         |    -0.47 | erners, flairr, mairel, silrak, Yamero     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
