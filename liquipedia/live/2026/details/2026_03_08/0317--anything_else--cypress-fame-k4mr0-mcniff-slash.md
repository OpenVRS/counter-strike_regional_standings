### Roster Details<br />
Team Name: Anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [317](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  462.2<br />
<br />
Final Rank Value (462.2) = Starting Rank Value (471.7) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.149[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 471.7
- 400 + ( ( 0.037 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 471.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.001
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3669 | 2025-10-22 | Zomblers             | L   | 0.288      | -            | -                | -                | -         |    -1.99 | corim, cypress, FAME, mcniff, Slash |
|            6 |     3728 | 2025-10-18 | MONEY CREW           | L   | 0.261      | -            | -                | -                | -         |    -3.78 | corim, cypress, FAME, mcniff, Slash |
|            5 |     4074 | 2025-10-07 | Chicken Coop Esports | L   | 0.188      | -            | -                | -                | -         |    -2.48 | cypress, FAME, K4mr0, mcniff, Slash |
|            4 |     4188 | 2025-10-05 | Mythic               | L   | 0.174      | -            | -                | -                | -         |    -1.54 | cypress, FAME, K4mr0, mcniff, Slash |
|            3 |     5024 | 2025-09-12 | Life's A Game        | L   | 0.021      | -            | -                | -                | -         |    -0.10 | cypress, FAME, K4mr0, mcniff, Slash |
|            2 |     5069 | 2025-09-11 | NYX (American team)  | W   | 0.014      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.18 | cypress, FAME, K4mr0, mcniff, Slash |
|            1 |     5120 | 2025-09-10 | Regain               | W   | 0.008      | 0.363        | 0.007 (0.000)    | 0.280 (0.001)    | 0 (0.000) |     0.19 | cypress, FAME, K4mr0, mcniff, Slash |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
