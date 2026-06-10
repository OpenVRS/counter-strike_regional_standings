### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, aragornN, krazy, MUTiRiS, SYDOX<br />
Global Rank: [261](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [167]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  621.1<br />
<br />
Final Rank Value (621.1) = Starting Rank Value (615.5) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.5
- 400 + ( ( 0.112 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 615.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.009
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5967 | 2025-12-21 | Ninjas in Pyjamas | L   | 0.074      | -            | -                | -                | -         |    -0.03 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            4 |     5971 | 2025-12-21 | Sharks Esports    | W   | 0.073      | 0.309        | 0.056 (0.001)    | 0.458 (0.010)    | 1 (0.073) |     2.27 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            3 |     5976 | 2025-12-21 | FUZOS             | W   | 0.072      | 0.309        | 0.002 (0.000)    | 0.212 (0.005)    | 1 (0.072) |     1.51 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            2 |     6027 | 2025-12-19 | SAW               | W   | 0.059      | 0.309        | 0.001 (0.000)    | 0.198 (0.004)    | 1 (0.059) |     1.36 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            1 |     6033 | 2025-12-19 | Wolf Esports      | W   | 0.058      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.058) |     0.42 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.71)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.074 | $1,757.00      | $130.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
