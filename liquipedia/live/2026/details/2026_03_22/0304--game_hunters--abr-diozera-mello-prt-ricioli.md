### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, diozera, mello, prt, RICIOLI<br />
Global Rank: [304](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  505.5<br />
<br />
Final Rank Value (505.5) = Starting Rank Value (499.6) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.6
- 400 + ( ( 0.050 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 499.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.023
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4223 | 2025-10-26 | DashSkins              | L   | 0.219      | -            | -                | -                | -         |    -1.12 | abr, prt, RICIOLI, s1cko, spinnie |
|           14 |     4279 | 2025-10-25 | MAGICOS                | W   | 0.212      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.39 | abr, prt, RICIOLI, s1cko, spinnie |
|           13 |     4340 | 2025-10-24 | Keyd Stars             | L   | 0.206      | -            | -                | -                | -         |    -1.18 | abr, prt, RICIOLI, s1cko, spinnie |
|           12 |     4396 | 2025-10-23 | Vasco eSports          | W   | 0.199      | 0.363        | 0.003 (0.000)    | 0.354 (0.026)    | 0 (0.000) |     4.97 | abr, prt, RICIOLI, s1cko, spinnie |
|           11 |     4623 | 2025-10-14 | MIBR Academy           | L   | 0.139      | -            | -                | -                | -         |    -2.06 | abr, diozera, mello, prt, RICIOLI |
|           10 |     4658 | 2025-10-13 | Fuego eSports          | L   | 0.132      | -            | -                | -                | -         |    -2.16 | abr, diozera, mello, prt, RICIOLI |
|            9 |     4684 | 2025-10-11 | FOLHA AMARELA          | L   | 0.119      | -            | -                | -                | -         |    -0.66 | abr, diozera, mello, prt, RICIOLI |
|            8 |     4773 | 2025-10-09 | Vasco eSports          | W   | 0.104      | 0.371        | 0.003 (0.000)    | 0.354 (0.014)    | 0 (0.000) |     2.61 | abr, diozera, mello, prt, RICIOLI |
|            7 |     4809 | 2025-10-08 | UNO MILLE              | L   | 0.099      | -            | -                | -                | -         |    -0.73 | abr, diozera, mello, prt, RICIOLI |
|            6 |     4862 | 2025-10-07 | ELITES                 | W   | 0.092      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | abr, diozera, mello, prt, RICIOLI |
|            5 |     4878 | 2025-10-07 | Vexa E-Sports          | W   | 0.091      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.38 | abr, diozera, mello, prt, RICIOLI |
|            4 |     4915 | 2025-10-06 | Dusty Roots            | L   | 0.086      | -            | -                | -                | -         |    -0.76 | abr, diozera, mello, prt, RICIOLI |
|            3 |     4975 | 2025-10-05 | Procyon Team           | W   | 0.079      | 0.363        | 0.014 (0.000)    | 0.324 (0.009)    | 0 (0.000) |     2.27 | abr, diozera, mello, prt, RICIOLI |
|            2 |     5257 | 2025-09-28 | Bounty Hunters Esports | L   | 0.033      | -            | -                | -                | -         |    -0.07 | abr, diozera, mello, prt, RICIOLI |
|            1 |     5303 | 2025-09-27 | ODDIK                  | L   | 0.027      | -            | -                | -                | -         |    -0.01 | abr, diozera, mello, prt, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
