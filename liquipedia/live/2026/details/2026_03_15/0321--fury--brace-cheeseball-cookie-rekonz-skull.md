### Roster Details<br />
Team Name: FURY<br />
Roster: BRACE, cheeseball, cookie, rekonz, SkulL<br />
Global Rank: [321](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_15.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_03_15.md)<br />
<br />
Final Rank Value:  469.9<br />
<br />
Final Rank Value (469.9) = Starting Rank Value (496.7) + Head To Head Adjustments (-26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.7
- 400 + ( ( 0.049 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 496.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1161 | 2026-02-19 | BBBMBCBS                    | L   | 1.000      | -            | -                | -                | -         |   -17.54 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            9 |     1280 | 2026-02-17 | Time Waves                  | L   | 1.000      | -            | -                | -                | -         |   -16.69 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            8 |     2856 | 2025-12-06 | Rooster                     | L   | 0.543      | -            | -                | -                | -         |    -2.55 | cheeseball, cookie, rekonz, SkulL, versa      |
|            7 |     2858 | 2025-12-06 | Ground Zero Gaming          | L   | 0.542      | -            | -                | -                | -         |    -1.46 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            6 |     2859 | 2025-12-06 | Animus Victoria             | W   | 0.541      | 0.303        | 0.000 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     8.24 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            5 |     3137 | 2025-11-25 | LITE Esports                | L   | 0.463      | -            | -                | -                | -         |    -5.10 | BRACE, cookie, rekonz, SkulL, versa           |
|            4 |     3198 | 2025-11-23 | Rooster                     | W   | 0.450      | 0.312        | 0.005 (0.001)    | 0.264 (0.037)    | 0 (0.000) |    12.19 | BRACE, cookie, rekonz, SkulL, versa           |
|            3 |     3222 | 2025-11-22 | Mindfreak (Australian team) | L   | 0.444      | -            | -                | -                | -         |    -1.02 | BRACE, cheeseball, cookie, rekonz, SkulL      |
|            2 |     4205 | 2025-10-24 | Rooster                     | L   | 0.250      | -            | -                | -                | -         |    -2.23 | BRACE, cheeseball, cookie, rekonz, SkulL      |
|            1 |     4251 | 2025-10-23 | Ground Zero Gaming          | L   | 0.244      | -            | -                | -                | -         |    -0.70 | BRACE, cheeseball, cookie, rekonz, SkulL      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
