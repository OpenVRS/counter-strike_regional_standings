### Roster Details<br />
Team Name: GLORE<br />
Roster: DEPRESHN, HENU, M1key<br />
Global Rank: [291](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [176]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  522.2<br />
<br />
Final Rank Value (522.2) = Starting Rank Value (520.8) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.8
- 400 + ( ( 0.063 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 520.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3946 | 2025-10-10 | BRUTE                       | L   | 0.206      | -            | -                | -                | -         |    -1.24 | DEPRESHN, HENU, M1key, neptun, Topa  |
|            4 |     4003 | 2025-10-09 | Ex-Fingers Crossed          | L   | 0.198      | -            | -                | -                | -         |    -0.54 | DEPRESHN, HENU, M1key, neptun, Topa  |
|            3 |     4143 | 2025-10-06 | Oramond                     | W   | 0.179      | 0.447        | 0.105 (0.008)    | 0.790 (0.063)    | 0 (0.000) |     5.22 | Aaron, DEPRESHN, HENU, M1key, maaryy |
|            2 |     4644 | 2025-09-25 | ComeBack (Kazakhstani team) | L   | 0.104      | -            | -                | -                | -         |    -1.23 | DEPRESHN, HENU, jelo, M1key, Sm1llee |
|            1 |     4664 | 2025-09-24 | Eternal Fire                | L   | 0.099      | -            | -                | -                | -         |    -0.80 | DEPRESHN, HENU, jelo, M1key, Sm1llee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
