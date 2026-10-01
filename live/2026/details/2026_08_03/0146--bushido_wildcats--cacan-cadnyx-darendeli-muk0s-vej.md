### Roster Details<br />
Team Name: Bushido Wildcats<br />
Roster: cacan, cadnyx, Darendeli, Muk0s, Vej<br />
Global Rank: [146](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [105]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  866.1<br />
<br />
Final Rank Value (866.1) = Starting Rank Value (762.2) + Head To Head Adjustments (103.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.2
- 400 + ( ( 0.187 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 762.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      496 | 2026-07-13 | QUAZAR           | L   | 1.000      | -            | -                | -                | -         |    -9.71 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           34 |      512 | 2026-07-12 | SPARTA           | W   | 1.000      | 0.317        | 0.023 (0.007)    | 0.994 (0.315)    | 0 (0.000) |    18.84 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           33 |      526 | 2026-07-12 | MOUZ NXT         | W   | 1.000      | 0.317        | 0.005 (0.002)    | 0.457 (0.145)    | 0 (0.000) |    17.63 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           32 |     1221 | 2026-06-05 | ex-RUBY          | L   | 0.806      | -            | -                | -                | -         |    -4.13 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           31 |     1249 | 2026-06-04 | Nemiga           | W   | 0.798      | 0.384        | 0.102 (0.031)    | 0.713 (0.219)    | 0 (0.000) |    22.63 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           30 |     1284 | 2026-06-02 | DragonClaw       | W   | 0.787      | 0.384        | 0.020 (0.006)    | 0.492 (0.149)    | 0 (0.000) |    18.19 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           29 |     1324 | 2026-05-31 | HEROIC Academy   | W   | 0.773      | 0.384        | 0.002 (0.001)    | 0.369 (0.110)    | 0 (0.000) |     9.86 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           28 |     1378 | 2026-05-30 | Phantom          | L   | 0.766      | -            | -                | -                | -         |    -5.76 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           27 |     1497 | 2026-05-27 | Privateer        | L   | 0.746      | -            | -                | -                | -         |   -13.92 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           26 |     1509 | 2026-05-27 | Rebels           | W   | 0.746      | 0.384        | 0.006 (0.002)    | 0.522 (0.150)    | 0 (0.000) |    17.43 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           25 |     1521 | 2026-05-26 | KOLESIE          | L   | 0.741      | -            | -                | -                | -         |    -4.32 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           24 |     1547 | 2026-05-26 | DONSTU           | W   | 0.739      | 0.303        | 0.002 (0.001)    | 0.678 (0.152)    | 0 (0.000) |    12.55 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           23 |     1607 | 2026-05-24 | Misa             | L   | 0.727      | -            | -                | -                | -         |   -13.23 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           22 |     1616 | 2026-05-24 | Hashiras         | W   | 0.726      | 0.344        | -                | 0.420 (0.105)    | 0 (0.000) |    11.88 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           21 |     1685 | 2026-05-23 | Just Players     | W   | 0.718      | 0.344        | 0.009 (0.002)    | 0.819 (0.202)    | 0 (0.000) |    17.52 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           20 |     1715 | 2026-05-22 | Lilmix           | W   | 0.712      | 0.344        | -                | 0.491 (0.120)    | -         |    11.73 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           19 |     1739 | 2026-05-21 | Rune Eaters      | L   | 0.707      | -            | -                | -                | -         |    -3.25 | cacan, cadnyx, Darendeli, Etsu, Vej  |
|           18 |     4344 | 2026-03-19 | STATE            | L   | 0.287      | -            | -                | -                | -         |    -0.92 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|           17 |     4373 | 2026-03-18 | Lilmix           | W   | 0.281      | -            | -                | -                | -         |     3.39 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           16 |     4433 | 2026-03-17 | K27              | L   | 0.273      | -            | -                | -                | -         |    -0.22 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           15 |     4481 | 2026-03-16 | cirahvi          | W   | 0.266      | 0.384        | 0.004 (0.000)    | -                | -         |     3.52 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           14 |     5589 | 2026-02-22 | VP.Prodigy       | L   | 0.119      | -            | -                | -                | -         |    -2.96 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|           13 |     5718 | 2026-02-19 | DUNDU            | W   | 0.101      | -            | -                | -                | -         |     0.37 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           12 |     5783 | 2026-02-18 | ex-Zero Tenacity | L   | 0.093      | -            | -                | -                | -         |    -1.38 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           11 |     5804 | 2026-02-18 | TDK              | L   | 0.092      | -            | -                | -                | -         |    -1.07 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           10 |     5846 | 2026-02-17 | WW               | L   | 0.087      | -            | -                | -                | -         |    -0.13 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|            9 |     5870 | 2026-02-17 | Fuzos            | W   | 0.085      | -            | -                | -                | -         |     0.89 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            8 |     5875 | 2026-02-16 | MASONIC          | W   | 0.082      | 0.384        | 0.010 (0.000)    | -                | -         |     2.21 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            7 |     5936 | 2026-02-15 | VP.Prodigy       | L   | 0.074      | -            | -                | -                | -         |    -1.85 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            6 |     5955 | 2026-02-15 | Fuzos            | L   | 0.073      | -            | -                | -                | -         |    -1.55 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            5 |     6051 | 2026-02-13 | Leo              | L   | 0.061      | -            | -                | -                | -         |    -1.11 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            4 |     6076 | 2026-02-13 | Gentle Mates     | L   | 0.059      | -            | -                | -                | -         |    -0.12 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            3 |     6120 | 2026-02-12 | G2 Ares          | W   | 0.052      | -            | -                | -                | 1 (0.052) |     1.23 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            2 |     6302 | 2026-02-06 | Romania          | L   | 0.014      | -            | -                | -                | -         |    -0.30 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            1 |     6329 | 2026-02-05 | MASONIC          | L   | 0.007      | -            | -                | -                | -         |    -0.03 | cadnyx, Darendeli, eNs, scolleN, Vej |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,017.32)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      0.814 | $1,250.00      | $1,017.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
