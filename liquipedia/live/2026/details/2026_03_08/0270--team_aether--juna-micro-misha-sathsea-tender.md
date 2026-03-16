### Roster Details<br />
Team Name: Team Aether<br />
Roster: juna, micro, misha, Sathsea, Tender<br />
Global Rank: [270](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  567.8<br />
<br />
Final Rank Value (567.8) = Starting Rank Value (594.0) + Head To Head Adjustments (-26.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.0
- 400 + ( ( 0.101 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 594.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.004
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2287 | 2025-12-07 | Life's A Game        | L   | 0.595      | -            | -                | -                | -         |    -5.22 | micro, misha, Sathsea, Seb, Umar    |
|            7 |     2355 | 2025-12-04 | Wanted Goons         | L   | 0.575      | -            | -                | -                | -         |   -11.66 | micro, misha, Sathsea, Seb, Umar    |
|            6 |     2397 | 2025-12-02 | Chicken Coop Esports | L   | 0.561      | -            | -                | -                | -         |   -10.49 | micro, misha, Sathsea, Seb, Umar    |
|            5 |     4803 | 2025-09-18 | Wildcard             | L   | 0.061      | -            | -                | -                | -         |    -0.70 | juna, micro, misha, Sathsea, Tender |
|            4 |     4839 | 2025-09-17 | BOSS                 | W   | 0.054      | 0.363        | 0.018 (0.000)    | 0.386 (0.008)    | 0 (0.000) |     1.30 | juna, micro, misha, Sathsea, Tender |
|            3 |     5023 | 2025-09-12 | Outfit 49            | W   | 0.021      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.17 | juna, micro, misha, Sathsea, Tender |
|            2 |     5063 | 2025-09-11 | Mythic               | W   | 0.015      | 0.363        | 0.001 (0.000)    | 0.071 (0.000)    | 0 (0.000) |     0.26 | juna, micro, misha, Sathsea, Tender |
|            1 |     5118 | 2025-09-10 | OverKnight           | W   | 0.008      | 0.363        | 0.000 (0.000)    | 0.118 (0.000)    | 0 (0.000) |     0.13 | juna, micro, misha, Sathsea, Tender |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87.80)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      0.088 | $1,000.00      | $87.80          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
