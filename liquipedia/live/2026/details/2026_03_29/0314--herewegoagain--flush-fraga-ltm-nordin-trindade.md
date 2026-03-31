### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: flush, fraga, Ltm, nordin, trindade<br />
Global Rank: [314](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [89]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  511.0<br />
<br />
Final Rank Value (511.0) = Starting Rank Value (509.4) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 509.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.077
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      432 | 2026-03-19 | R2 Esports Club          | L   | 1.000      | -            | -                | -                | -         |    -7.78 | flush, fraga, guizo, k9izer, Ltm    |
|            8 |      496 | 2026-03-17 | UNO MILLE                | L   | 1.000      | -            | -                | -                | -         |    -6.29 | flush, fraga, guizo, k9izer, Ltm    |
|            7 |      596 | 2026-03-15 | FOLHA AMARELA            | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.359 (0.133)    | 0 (0.000) |    26.43 | flush, fraga, guizo, k9izer, Ltm    |
|            6 |      673 | 2026-03-13 | Players (Brazilian team) | L   | 1.000      | -            | -                | -                | -         |   -10.90 | flush, fraga, guizo, k9izer, Ltm    |
|            5 |     2870 | 2026-01-21 | Game Hunters             | L   | 0.751      | -            | -                | -                | -         |    -4.42 | flush, fraga, Ltm, nordin, trindade |
|            4 |     2908 | 2026-01-19 | Satriales                | W   | 0.737      | 0.371        | 0.000 (0.000)    | 0.022 (0.006)    | 0 (0.000) |     8.17 | flush, fraga, Ltm, nordin, trindade |
|            3 |     2987 | 2026-01-17 | ELITES                   | W   | 0.723      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.74 | flush, fraga, Ltm, nordin, trindade |
|            2 |     3072 | 2026-01-15 | PaiN Gaming Academy      | L   | 0.712      | -            | -                | -                | -         |    -6.53 | flush, fraga, Ltm, nordin, trindade |
|            1 |     3101 | 2026-01-14 | Metanoia Wolves          | L   | 0.705      | -            | -                | -                | -         |    -4.86 | flush, fraga, Ltm, nordin, trindade |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
