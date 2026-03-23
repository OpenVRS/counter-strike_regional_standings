### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [278](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [171]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  574.6<br />
<br />
Final Rank Value (574.6) = Starting Rank Value (558.7) + Head To Head Adjustments (15.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.7
- 400 + ( ( 0.081 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 558.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3646 | 2025-11-07 | Acend                | L   | 0.346      | -            | -                | -                | -         |    -0.27 | jocab, MahaR, MisteM, rud, sL1m3 |
|            7 |     3662 | 2025-11-07 | Johnny Speeds        | L   | 0.345      | -            | -                | -                | -         |    -0.24 | jocab, MahaR, MisteM, rud, sL1m3 |
|            6 |     3685 | 2025-11-07 | Inner Circle Esports | W   | 0.345      | 0.336        | 0.086 (0.010)    | 0.416 (0.048)    | 1 (0.345) |    10.21 | jocab, MahaR, MisteM, rud, sL1m3 |
|            5 |     3700 | 2025-11-07 | Minkens finest       | W   | 0.345      | 0.336        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.345) |     3.11 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |     3709 | 2025-11-07 | Metizport            | L   | 0.344      | -            | -                | -                | -         |    -0.35 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |     3821 | 2025-11-03 | Tung Tung Sahur      | L   | 0.319      | -            | -                | -                | -         |    -1.20 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |     3845 | 2025-11-02 | Dziuseppe            | W   | 0.313      | 0.384        | 0.001 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     6.27 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |     3901 | 2025-10-31 | FORZE Reload         | L   | 0.299      | -            | -                | -                | -         |    -1.60 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
