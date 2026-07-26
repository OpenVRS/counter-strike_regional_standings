### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: fraga, guizo, shrr<br />
Global Rank: [365](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [98]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  469.3<br />
<br />
Final Rank Value (469.3) = Starting Rank Value (492.0) + Head To Head Adjustments (-22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.0
- 400 + ( ( 0.049 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 492.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1301 | 2026-05-18 | RED FEET        | L   | 0.833      | -            | -                | -                | -         |   -10.93 | extazzy, fraga, guizo, shrr, trindade |
|            6 |     1335 | 2026-05-17 | R2 Esports Club | L   | 0.824      | -            | -                | -                | -         |    -6.87 | extazzy, fraga, guizo, shrr, trindade |
|            5 |     1403 | 2026-05-14 | Crashers        | W   | 0.806      | 0.354        | 0.001 (0.000)    | 0.289 (0.082)    | 0 (0.000) |    17.80 | extazzy, fraga, guizo, shrr, trindade |
|            4 |     1471 | 2026-05-12 | BESTIA Academy  | L   | 0.792      | -            | -                | -                | -         |    -6.08 | extazzy, fraga, guizo, shrr, trindade |
|            3 |     1750 | 2026-05-02 | FURIA Female    | L   | 0.724      | -            | -                | -                | -         |    -8.44 | flush, fraga, guizo, Ltm, shrr        |
|            2 |     1837 | 2026-04-30 | Crashers        | L   | 0.713      | -            | -                | -                | -         |    -6.05 | flush, fraga, guizo, Ltm, shrr        |
|            1 |     1908 | 2026-04-29 | Isurus          | L   | 0.704      | -            | -                | -                | -         |    -2.10 | flush, fraga, guizo, Ltm, shrr        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
