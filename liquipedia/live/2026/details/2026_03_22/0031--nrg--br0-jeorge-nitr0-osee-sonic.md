### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Jeorge, nitr0, oSee, Sonic<br />
Global Rank: [31](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [6]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  1371.9<br />
<br />
Final Rank Value (1371.9) = Starting Rank Value (1289.5) + Head To Head Adjustments (82.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.151[<sup>2</sup>](#table1)
- LAN Wins: 0.730[<sup>2</sup>](#table1)

The average of these factors is 0.446<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1289.5
- 400 + ( ( 0.446 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1289.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.359
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      702 | 2026-03-03 | Ninjas in Pyjamas      | L   | 1.000      | -            | -                | -                | -         |   -15.92 | br0, Grim, nitr0, oSee, Sonic    |
|           30 |      777 | 2026-03-02 | Monte                  | L   | 1.000      | -            | -                | -                | -         |   -11.30 | br0, Grim, nitr0, oSee, Sonic    |
|           29 |      820 | 2026-03-01 | HEROIC                 | L   | 1.000      | -            | -                | -                | -         |   -12.69 | br0, Grim, nitr0, oSee, Sonic    |
|           28 |     1818 | 2026-02-08 | Passion UA             | W   | 0.918      | 0.143        | 0.082 (0.011)    | -                | -         |     8.80 | br0, Jeorge, nitr0, oSee, Sonic  |
|           27 |     1848 | 2026-02-07 | Team Voca              | W   | 0.911      | 0.143        | -                | 0.695 (0.091)    | -         |    11.12 | br0, Jeorge, nitr0, oSee, Sonic  |
|           26 |     1885 | 2026-02-06 | Fisher College         | W   | 0.905      | -            | -                | -                | -         |     0.21 | br0, Jeorge, nitr0, oSee, Sonic  |
|           25 |     1996 | 2026-02-02 | Team Falcons           | L   | 0.878      | -            | -                | -                | -         |    -3.29 | br0, Jeorge, nitr0, oSee, Sonic  |
|           24 |     2032 | 2026-02-01 | MOUZ                   | L   | 0.870      | -            | -                | -                | -         |    -1.64 | br0, Jeorge, nitr0, oSee, Sonic  |
|           23 |     2104 | 2026-01-30 | Astralis               | W   | 0.857      | 0.783        | 0.580 (0.389)    | 0.421 (0.282)    | 1 (0.857) |    23.57 | br0, Jeorge, nitr0, oSee, Sonic  |
|           22 |     2152 | 2026-01-28 | B8                     | W   | 0.844      | 0.783        | 0.174 (0.115)    | 0.202 (0.133)    | 1 (0.844) |    13.68 | br0, Jeorge, nitr0, oSee, Sonic  |
|           21 |     2662 | 2026-01-11 | M80                    | L   | 0.734      | -            | -                | -                | -         |   -11.46 | br0, Jeorge, nitr0, oSee, Sonic  |
|           20 |     2663 | 2026-01-11 | Marsborne              | W   | 0.732      | 0.396        | 0.048 (0.014)    | 0.558 (0.162)    | 1 (0.732) |     7.18 | br0, Jeorge, nitr0, oSee, Sonic  |
|           19 |     2674 | 2026-01-10 | Team Voca              | W   | 0.725      | 0.396        | 0.032 (0.009)    | 0.695 (0.200)    | 1 (0.725) |    10.41 | br0, Jeorge, nitr0, oSee, Sonic  |
|           18 |     2683 | 2026-01-09 | Outfit 49              | W   | 0.720      | 0.396        | -                | 0.356 (0.102)    | 1 (0.720) |     0.54 | br0, Jeorge, nitr0, oSee, Sonic  |
|           17 |     2701 | 2026-01-04 | 9INE                   | W   | 0.687      | 0.323        | 0.047 (0.010)    | 0.661 (0.147)    | 1 (0.687) |    10.16 | br0, Jeorge, nitr0, oSee, Sonic  |
|           16 |     2707 | 2026-01-04 | GamerLegion            | W   | 0.685      | 0.323        | 0.236 (0.052)    | 0.528 (0.117)    | 1 (0.685) |    16.31 | br0, Jeorge, nitr0, oSee, Sonic  |
|           15 |     2718 | 2026-01-04 | Team Voca              | W   | 0.684      | 0.323        | -                | 0.695 (0.154)    | 1 (0.684) |    11.27 | br0, Jeorge, nitr0, oSee, Sonic  |
|           14 |     2757 | 2026-01-03 | Marsborne              | W   | 0.678      | 0.323        | 0.048 (0.011)    | 0.558 (0.122)    | 1 (0.678) |     9.16 | br0, Jeorge, nitr0, oSee, Sonic  |
|           13 |     2763 | 2026-01-03 | EMPIRE (American team) | W   | 0.678      | -            | -                | -                | 1 (0.678) |     0.23 | br0, Jeorge, nitr0, oSee, Sonic  |
|           12 |     3450 | 2025-11-20 | SkinRave Esports       | W   | 0.387      | -            | -                | -                | -         |     1.01 | br0, Jeorge, nitr0, Sonic, XotiC |
|           11 |     3709 | 2025-11-09 | M80                    | W   | 0.313      | 0.333        | 0.085 (0.009)    | -                | -         |     5.57 | br0, Jeorge, nitr0, Sonic, XotiC |
|           10 |     3716 | 2025-11-09 | BC.Game Esports        | W   | 0.312      | 0.333        | 0.128 (0.013)    | -                | -         |     6.82 | br0, Jeorge, nitr0, Sonic, XotiC |
|            9 |     3725 | 2025-11-09 | Mavrek Gaming          | W   | 0.311      | -            | -                | -                | -         |     0.08 | br0, Jeorge, nitr0, Sonic, XotiC |
|            8 |     3746 | 2025-11-08 | Reign Above            | W   | 0.306      | -            | -                | -                | -         |     0.18 | br0, Jeorge, nitr0, Sonic, XotiC |
|            7 |     3751 | 2025-11-08 | Outfit 49              | W   | 0.306      | -            | -                | -                | -         |     0.12 | br0, Jeorge, nitr0, Sonic, XotiC |
|            6 |     4226 | 2025-10-26 | Marsborne              | W   | 0.219      | -            | -                | -                | -         |     3.41 | br0, Jeorge, nitr0, Sonic, XotiC |
|            5 |     4247 | 2025-10-26 | Team Voca              | W   | 0.218      | -            | -                | -                | -         |     0.27 | br0, Jeorge, nitr0, Sonic, XotiC |
|            4 |     4286 | 2025-10-25 | SapphireKelownaDotCom  | W   | 0.212      | -            | -                | -                | -         |     0.05 | br0, Jeorge, nitr0, Sonic, XotiC |
|            3 |     5199 | 2025-09-30 | Fluxo W7M              | L   | 0.044      | -            | -                | -                | -         |    -0.88 | br0, Jeorge, nitr0, Sonic, XotiC |
|            2 |     5239 | 2025-09-29 | Legacy                 | L   | 0.037      | -            | -                | -                | -         |    -0.43 | br0, Jeorge, nitr0, Sonic, XotiC |
|            1 |     5284 | 2025-09-28 | GamerLegion            | L   | 0.030      | -            | -                | -                | -         |    -0.16 | br0, Jeorge, nitr0, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,523.29)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-05 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-02-08 |      0.918 | $10,000.00     | $9,177.78       |
| 2026-01-11 |      0.734 | $7,000.00      | $5,135.28       |
| 2026-01-04 |      0.687 | $5,000.00      | $3,435.65       |
| 2025-11-09 |      0.313 | $5,500.00      | $1,722.57       |
| 2025-10-26 |      0.219 | $4,000.00      | $877.78         |
| 2025-10-02 |      0.058 | $3,000.00      | $174.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
