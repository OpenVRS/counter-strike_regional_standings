### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: n0te, sjuush, Snappi, stavn, xKacpersky<br />
Global Rank: [29](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [22]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1337.6<br />
<br />
Final Rank Value (1337.6) = Starting Rank Value (1322.3) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.585[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.688[<sup>2</sup>](#table1)

The average of these factors is 0.485<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.3
- 400 + ( ( 0.485 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1322.3


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
|           33 |       28 | 2026-09-06 | fnatic          | L   | 1.000      | -            | -                | -                | -         |   -16.32 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           32 |       35 | 2026-09-05 | Nuclear TigeRES | W   | 1.000      | 0.143        | -                | 0.859 (0.123)    | -         |    11.37 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           31 |       91 | 2026-09-03 | Sangal          | W   | 1.000      | -            | -                | -                | -         |     0.25 | Krimbo, n0te, sjuush, stavn, xKacpersky   |
|           30 |      732 | 2026-08-16 | Astralis        | L   | 1.000      | -            | -                | -                | -         |   -11.54 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           29 |      821 | 2026-08-14 | BETBOOM         | W   | 1.000      | 1.000        | 0.252 (0.252)    | 0.358 (0.358)    | 1 (1.000) |    22.66 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           28 |      862 | 2026-08-12 | Legacy          | L   | 1.000      | -            | -                | -                | -         |    -2.53 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           27 |     1364 | 2026-07-26 | magic           | L   | 0.912      | -            | -                | -                | -         |   -12.50 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           26 |     1380 | 2026-07-26 | paiN            | L   | 0.910      | -            | -                | -                | -         |   -16.70 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           25 |     1393 | 2026-07-25 | HEROIC          | W   | 0.905      | -            | -                | -                | -         |    14.72 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           24 |     1470 | 2026-07-23 | BBL             | W   | 0.891      | -            | -                | -                | -         |     8.61 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           23 |     1497 | 2026-07-22 | 100 Thieves     | W   | 0.884      | -            | -                | -                | -         |    14.79 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           22 |     1528 | 2026-07-21 | M80             | W   | 0.877      | 0.903        | 0.130 (0.103)    | 0.353 (0.279)    | -         |    11.69 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           21 |     1590 | 2026-07-18 | K27             | L   | 0.858      | -            | -                | -                | -         |   -11.65 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           20 |     1621 | 2026-07-17 | HEROIC          | L   | 0.851      | -            | -                | -                | -         |   -12.69 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           19 |     1655 | 2026-07-16 | Iberian Soul    | W   | 0.844      | 0.500        | 0.094 (0.040)    | 0.385 (0.162)    | 1 (0.844) |     7.83 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           18 |     1681 | 2026-07-15 | K27             | W   | 0.837      | 0.500        | 0.079 (0.033)    | 0.807 (0.338)    | 1 (0.837) |    14.25 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           17 |     1798 | 2026-07-09 | Virtus.pro      | L   | 0.798      | -            | -                | -                | -         |   -13.43 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           16 |     1855 | 2026-07-04 | BIG             | L   | 0.763      | -            | -                | -                | -         |    -6.77 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           15 |     1874 | 2026-07-03 | Luminosity      | W   | 0.756      | 1.000        | 0.145 (0.110)    | 0.183 (0.138)    | 1 (0.756) |     9.12 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           14 |     1896 | 2026-07-02 | Alliance        | L   | 0.749      | -            | -                | -                | -         |   -10.08 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           13 |     1914 | 2026-07-01 | 3DMAX           | L   | 0.743      | -            | -                | -                | -         |   -13.59 | n0te, sjuush, Snappi, stavn, xKacpersky   |
|           12 |     2563 | 2026-05-30 | magic           | W   | 0.532      | 0.500        | 0.201 (0.053)    | 0.396 (0.105)    | 1 (0.532) |     9.58 | cairne, sjuush, Snappi, stavn, xKacpersky |
|           11 |     2582 | 2026-05-30 | FaZe            | W   | 0.531      | 0.500        | 0.478 (0.127)    | 0.356 (0.094)    | 1 (0.531) |    13.48 | cairne, sjuush, Snappi, stavn, xKacpersky |
|           10 |     2608 | 2026-05-29 | magic           | L   | 0.525      | -            | -                | -                | -         |    -6.90 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            9 |     2645 | 2026-05-28 | DENDELE         | W   | 0.520      | 0.500        | 0.130 (0.034)    | 0.409 (0.106)    | 1 (0.520) |     8.76 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            8 |     2710 | 2026-05-27 | HEROIC          | W   | 0.511      | 0.500        | 0.114 (0.029)    | 0.696 (0.178)    | 1 (0.511) |     9.03 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            7 |     2981 | 2026-05-21 | Lynn Vision     | L   | 0.469      | -            | -                | -                | -         |    -7.71 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            6 |     3022 | 2026-05-19 | B8              | L   | 0.461      | -            | -                | -                | -         |    -4.21 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            5 |     3796 | 2026-04-26 | Luminosity      | L   | 0.304      | -            | -                | -                | -         |    -6.40 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            4 |     3826 | 2026-04-25 | BIG             | W   | 0.300      | 0.471        | 0.151 (0.021)    | -                | 1 (0.300) |     7.52 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            3 |     3875 | 2026-04-25 | 100 Thieves     | W   | 0.297      | -            | -                | -                | 1 (0.297) |     5.90 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            2 |     3902 | 2026-04-24 | Luminosity      | L   | 0.292      | -            | -                | -                | -         |    -6.11 | cairne, sjuush, Snappi, stavn, xKacpersky |
|            1 |     3938 | 2026-04-23 | DENDELE         | W   | 0.286      | -            | -                | -                | -         |     4.89 | cairne, sjuush, Snappi, stavn, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($99,068.55)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-26 |      0.912 | $28,750.00     | $26,221.47      |
| 2026-07-18 |      0.859 | $13,500.00     | $11,591.77      |
| 2026-07-12 |      0.817 | $27,500.00     | $22,454.53      |
| 2026-05-30 |      0.532 | $25,000.00     | $13,297.29      |
| 2026-05-24 |      0.490 | $5,000.00      | $2,447.68       |
| 2026-04-26 |      0.306 | $10,000.00     | $3,055.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
