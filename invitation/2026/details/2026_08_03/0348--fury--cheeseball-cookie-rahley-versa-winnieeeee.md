### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [348](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  527.3<br />
<br />
Final Rank Value (527.3) = Starting Rank Value (503.7) + Head To Head Adjustments (23.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.7
- 400 + ( ( 0.054 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 503.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2366 | 2026-05-01 | Abyssal      | L   | 0.571      | -            | -                | -                | -         |    -4.81 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            6 |     2402 | 2026-04-30 | MARKandLARRY | W   | 0.565      | 0.278        | 0.001 (0.000)    | 0.147 (0.023)    | 0 (0.000) |    11.51 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            5 |     2454 | 2026-04-29 | Rooster      | W   | 0.557      | 0.278        | 0.008 (0.001)    | 0.379 (0.059)    | 0 (0.000) |    14.61 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            4 |     2488 | 2026-04-28 | Skele        | W   | 0.552      | 0.278        | 0.000 (0.000)    | 0.037 (0.006)    | 0 (0.000) |     8.78 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            3 |     2607 | 2026-04-26 | Mindfreak    | L   | 0.538      | -            | -                | -                | -         |    -3.23 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            2 |     5801 | 2026-02-18 | BBBMBCBS     | L   | 0.092      | -            | -                | -                | -         |    -1.54 | cheeseball, cookie, rekonz, SkulL, versa      |
|            1 |     5873 | 2026-02-16 | Time Waves   | L   | 0.084      | -            | -                | -                | -         |    -1.70 | cheeseball, cookie, rekonz, SkulL, versa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
