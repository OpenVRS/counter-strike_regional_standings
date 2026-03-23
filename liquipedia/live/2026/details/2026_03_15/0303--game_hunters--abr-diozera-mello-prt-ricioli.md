### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, diozera, mello, prt, RICIOLI<br />
Global Rank: [303](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [82]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  509.4<br />
<br />
Final Rank Value (509.4) = Starting Rank Value (501.7) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.7
- 400 + ( ( 0.052 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 501.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.030
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4048 | 2025-10-26 | DashSkins              | L   | 0.267      | -            | -                | -                | -         |    -1.48 | abr, prt, RICIOLI, s1cko, spinnie |
|           14 |     4104 | 2025-10-25 | MAGICOS                | W   | 0.260      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.88 | abr, prt, RICIOLI, s1cko, spinnie |
|           13 |     4165 | 2025-10-24 | Keyd Stars             | L   | 0.254      | -            | -                | -                | -         |    -1.34 | abr, prt, RICIOLI, s1cko, spinnie |
|           12 |     4221 | 2025-10-23 | Vasco eSports          | W   | 0.247      | 0.363        | 0.003 (0.000)    | 0.354 (0.032)    | 0 (0.000) |     6.07 | abr, prt, RICIOLI, s1cko, spinnie |
|           11 |     4448 | 2025-10-14 | MIBR Academy           | L   | 0.187      | -            | -                | -                | -         |    -2.96 | abr, diozera, mello, prt, RICIOLI |
|           10 |     4483 | 2025-10-13 | Fuego eSports          | L   | 0.180      | -            | -                | -                | -         |    -2.93 | abr, diozera, mello, prt, RICIOLI |
|            9 |     4509 | 2025-10-11 | FOLHA AMARELA          | L   | 0.166      | -            | -                | -                | -         |    -1.01 | abr, diozera, mello, prt, RICIOLI |
|            8 |     4598 | 2025-10-09 | Vasco eSports          | W   | 0.152      | 0.371        | 0.003 (0.000)    | 0.354 (0.020)    | 0 (0.000) |     3.77 | abr, diozera, mello, prt, RICIOLI |
|            7 |     4634 | 2025-10-08 | UNO MILLE              | L   | 0.147      | -            | -                | -                | -         |    -1.14 | abr, diozera, mello, prt, RICIOLI |
|            6 |     4687 | 2025-10-07 | ELITES                 | W   | 0.140      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.56 | abr, diozera, mello, prt, RICIOLI |
|            5 |     4703 | 2025-10-07 | Vexa E-Sports          | W   | 0.139      | 0.371        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.09 | abr, diozera, mello, prt, RICIOLI |
|            4 |     4740 | 2025-10-06 | Dusty Roots            | L   | 0.134      | -            | -                | -                | -         |    -1.08 | abr, diozera, mello, prt, RICIOLI |
|            3 |     4800 | 2025-10-05 | Procyon Team           | W   | 0.127      | 0.363        | 0.013 (0.001)    | 0.325 (0.015)    | 0 (0.000) |     3.63 | abr, diozera, mello, prt, RICIOLI |
|            2 |     5082 | 2025-09-28 | Bounty Hunters Esports | L   | 0.080      | -            | -                | -                | -         |    -0.23 | abr, diozera, mello, prt, RICIOLI |
|            1 |     5128 | 2025-09-27 | ODDIK                  | L   | 0.075      | -            | -                | -                | -         |    -0.07 | abr, diozera, mello, prt, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
