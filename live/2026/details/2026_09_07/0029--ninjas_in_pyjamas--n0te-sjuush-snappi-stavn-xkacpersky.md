### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: n0te, sjuush, Snappi, stavn, xKacpersky<br />
Global Rank: [29](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [22]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1336.0<br />
<br />
Final Rank Value (1336.0) = Starting Rank Value (1320.6) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.586[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.686[<sup>2</sup>](#table1)

The average of these factors is 0.483<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1320.6
- 400 + ( ( 0.483 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1320.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       56 | 2026-09-06 | fnatic          | L   | 1.000      | -            | -                | -                | -         |   -16.20 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           32 |       63 | 2026-09-05 | Nuclear TigeRES | W   | 1.000      | 0.143        | -                | 0.858 (0.123)    | -         |    11.34 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           31 |      119 | 2026-09-03 | Sangal          | W   | 1.000      | -            | -                | -                | -         |     0.25 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           30 |      760 | 2026-08-16 | Astralis        | L   | 1.000      | -            | -                | -                | -         |   -11.59 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           29 |      849 | 2026-08-14 | BETBOOM         | W   | 1.000      | 1.000        | 0.252 (0.252)    | 0.355 (0.355)    | 1 (1.000) |    22.61 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           28 |      890 | 2026-08-12 | Legacy          | L   | 1.000      | -            | -                | -                | -         |    -2.49 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           27 |     1392 | 2026-07-26 | magic           | L   | 0.906      | -            | -                | -                | -         |   -12.46 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           26 |     1408 | 2026-07-26 | paiN            | L   | 0.905      | -            | -                | -                | -         |   -16.63 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           25 |     1421 | 2026-07-25 | HEROIC          | W   | 0.900      | -            | -                | -                | -         |    14.65 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           24 |     1498 | 2026-07-23 | BBL             | W   | 0.886      | -            | -                | -                | -         |     8.54 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           23 |     1525 | 2026-07-22 | 100 Thieves     | W   | 0.879      | -            | -                | -                | -         |    14.81 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           22 |     1556 | 2026-07-21 | M80             | W   | 0.871      | 0.903        | 0.131 (0.103)    | 0.350 (0.275)    | -         |    11.59 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           21 |     1618 | 2026-07-18 | K27             | L   | 0.852      | -            | -                | -                | -         |   -11.53 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           20 |     1649 | 2026-07-17 | HEROIC          | L   | 0.846      | -            | -                | -                | -         |   -12.59 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           19 |     1683 | 2026-07-16 | Iberian Soul    | W   | 0.839      | 0.500        | 0.093 (0.039)    | 0.383 (0.161)    | 1 (0.839) |     7.76 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           18 |     1709 | 2026-07-15 | K27             | W   | 0.831      | 0.500        | 0.078 (0.033)    | 0.805 (0.335)    | 1 (0.831) |    14.22 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           17 |     1826 | 2026-07-09 | Virtus.pro      | L   | 0.792      | -            | -                | -                | -         |   -13.30 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           16 |     1883 | 2026-07-04 | BIG             | L   | 0.758      | -            | -                | -                | -         |    -6.67 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           15 |     1902 | 2026-07-03 | Luminosity      | W   | 0.750      | 1.000        | 0.145 (0.109)    | 0.181 (0.136)    | 1 (0.750) |     9.01 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           14 |     1924 | 2026-07-02 | Alliance        | L   | 0.744      | -            | -                | -                | -         |    -9.94 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           13 |     1942 | 2026-07-01 | 3DMAX           | L   | 0.738      | -            | -                | -                | -         |   -13.51 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           12 |     2591 | 2026-05-30 | magic           | W   | 0.526      | 0.500        | 0.200 (0.053)    | 0.394 (0.104)    | 1 (0.526) |     9.47 | cairne, sjuush, Snappi, stavn, xKacpersky |
|           11 |     2610 | 2026-05-30 | FaZe            | W   | 0.525      | 0.500        | 0.477 (0.125)    | 0.354 (0.093)    | 1 (0.525) |    13.36 | cairne, sjuush, Snappi, stavn, xKacpersky |
|           10 |     2636 | 2026-05-29 | magic           | L   | 0.520      | -            | -                | -                | -         |    -6.84 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            9 |     2673 | 2026-05-28 | DENDELE         | W   | 0.514      | 0.500        | 0.130 (0.033)    | 0.407 (0.105)    | 1 (0.514) |     8.66 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            8 |     2738 | 2026-05-27 | HEROIC          | W   | 0.505      | 0.500        | 0.114 (0.029)    | 0.695 (0.176)    | 1 (0.505) |     8.94 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            7 |     3009 | 2026-05-21 | Lynn Vision     | L   | 0.464      | -            | -                | -                | -         |    -7.64 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            6 |     3050 | 2026-05-19 | B8              | L   | 0.456      | -            | -                | -                | -         |    -4.16 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            5 |     3824 | 2026-04-26 | Luminosity      | L   | 0.299      | -            | -                | -                | -         |    -6.30 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            4 |     3854 | 2026-04-25 | BIG             | W   | 0.294      | 0.471        | 0.150 (0.021)    | -                | 1 (0.294) |     7.39 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            3 |     3903 | 2026-04-25 | 100 Thieves     | W   | 0.292      | -            | -                | -                | 1 (0.292) |     5.82 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            2 |     3930 | 2026-04-24 | Luminosity      | L   | 0.287      | -            | -                | -                | -         |    -6.01 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            1 |     3966 | 2026-04-23 | DENDELE         | W   | 0.280      | -            | -                | -                | -         |     4.79 | cairne, sjuush, Snappi, stavn, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98,468.72)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-26 |      0.907 | $28,750.00     | $26,064.34      |
| 2026-07-18 |      0.853 | $13,500.00     | $11,517.99      |
| 2026-07-12 |      0.811 | $27,500.00     | $22,304.23      |
| 2026-05-30 |      0.526 | $25,000.00     | $13,160.65      |
| 2026-05-24 |      0.484 | $5,000.00      | $2,420.35       |
| 2026-04-26 |      0.300 | $10,000.00     | $3,001.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
