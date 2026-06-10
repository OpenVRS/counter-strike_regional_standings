### Roster Details<br />
Team Name: Beyond Limits<br />
Roster: Beastman, doltn, flixxy, Pr0mise<br />
Global Rank: [347](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [95]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  424.5<br />
<br />
Final Rank Value (424.5) = Starting Rank Value (435.6) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.019<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 435.6
- 400 + ( ( 0.019 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 435.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.024
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2576 | 2026-03-28 | Memeories    | L   | 0.721      | -            | -                | -                | -         |    -9.66 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            4 |     2588 | 2026-03-28 | Oatzu's Hips | W   | 0.720      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.720) |    10.35 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            3 |     2608 | 2026-03-28 | Memeories    | L   | 0.719      | -            | -                | -                | -         |    -9.93 | Beastman, denz, doltn, flixxy, Pr0mise     |
|            2 |     5922 | 2026-01-03 | Wildcard     | L   | 0.162      | -            | -                | -                | -         |    -1.93 | Beastman, doltn, flixxy, HAMBOOGA, Pr0mise |
|            1 |     5927 | 2026-01-03 | GamerLegion  | L   | 0.161      | -            | -                | -                | -         |    -0.00 | Beastman, doltn, flixxy, HAMBOOGA, Pr0mise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
