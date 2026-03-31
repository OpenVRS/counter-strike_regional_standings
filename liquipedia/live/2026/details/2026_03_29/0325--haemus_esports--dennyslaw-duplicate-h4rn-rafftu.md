### Roster Details<br />
Team Name: Haemus eSports<br />
Roster: dennyslaw, Duplicate, h4rn, rafftu<br />
Global Rank: [325](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  493.6<br />
<br />
Final Rank Value (493.6) = Starting Rank Value (489.5) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.151[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.5
- 400 + ( ( 0.046 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 489.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.011
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3365 | 2025-12-17 | HYPERSPIRIT      | L   | 0.518      | -            | -                | -                | -         |    -1.35 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            4 |     3378 | 2025-12-17 | The Huns Esports | L   | 0.516      | -            | -                | -                | -         |    -0.34 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            3 |     3943 | 2025-11-20 | Acend            | L   | 0.338      | -            | -                | -                | -         |    -0.27 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            2 |     3954 | 2025-11-20 | UNiTY esports    | L   | 0.337      | -            | -                | -                | -         |    -1.04 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            1 |     3972 | 2025-11-20 | Phantom Esports  | W   | 0.336      | 0.338        | 0.000 (0.000)    | 0.017 (0.002)    | 1 (0.336) |     7.10 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
