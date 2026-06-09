### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, aragornN, krazy, MUTiRiS, SYDOX<br />
Global Rank: [249](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [160]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  659.2<br />
<br />
Final Rank Value (659.2) = Starting Rank Value (648.3) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.3
- 400 + ( ( 0.130 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 648.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.017
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5857 | 2025-12-21 | Ninjas in Pyjamas | L   | 0.127      | -            | -                | -                | -         |    -0.05 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            7 |     5861 | 2025-12-21 | Sharks Esports    | W   | 0.126      | 0.309        | 0.060 (0.002)    | 0.460 (0.018)    | 1 (0.126) |     3.86 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            6 |     5866 | 2025-12-21 | FUZOS             | W   | 0.125      | 0.309        | 0.002 (0.000)    | 0.237 (0.009)    | 1 (0.125) |     2.50 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            5 |     5917 | 2025-12-19 | SAW               | W   | 0.111      | 0.309        | 0.001 (0.000)    | 0.207 (0.007)    | 1 (0.111) |     2.49 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            4 |     5923 | 2025-12-19 | Wolf Esports      | W   | 0.111      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.111) |     0.69 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            3 |     6063 | 2025-12-08 | ECSTATIC          | L   | 0.039      | -            | -                | -                | -         |    -0.07 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            2 |     6081 | 2025-12-07 | Nemiga Gaming     | W   | 0.033      | 0.435        | 0.136 (0.002)    | 1.000 (0.014)    | 0 (0.000) |     1.01 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            1 |     6130 | 2025-12-05 | NOVAQ             | W   | 0.019      | 0.435        | 0.009 (0.000)    | 0.265 (0.002)    | 0 (0.000) |     0.49 | Ag1l, aragornN, krazy, MUTiRiS, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($400.33)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.127 | $1,757.00      | $222.55         |
| 2025-12-09 |      0.044 | $4,000.00      | $177.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
