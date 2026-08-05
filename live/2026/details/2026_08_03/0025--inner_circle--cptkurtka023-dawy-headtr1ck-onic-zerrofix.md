### Roster Details<br />
Team Name: Inner Circle<br />
Roster: cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX<br />
Global Rank: [25](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [19]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1463.6<br />
<br />
Final Rank Value (1463.6) = Starting Rank Value (1495.8) + Head To Head Adjustments (-32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.289[<sup>2</sup>](#table1)
- LAN Wins: 0.994[<sup>2</sup>](#table1)

The average of these factors is 0.566<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1495.8
- 400 + ( ( 0.566 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1495.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      545 | 2026-07-11 | Virtus.pro        | W   | 1.000      | -            | -                | -                | -         |    11.97 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           53 |      562 | 2026-07-10 | magic             | W   | 1.000      | 0.143        | 0.201 (0.029)    | -                | -         |    16.85 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           52 |      588 | 2026-07-09 | GenOne            | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | -         |     2.91 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           51 |      750 | 2026-06-28 | Bulgaria          | W   | 0.961      | 0.548        | 0.069 (0.036)    | 0.881 (0.464)    | 1 (0.961) |     9.51 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           50 |      781 | 2026-06-27 | DENDELE           | W   | 0.953      | 0.548        | 0.115 (0.060)    | 0.609 (0.318)    | 1 (0.953) |    15.32 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           49 |      800 | 2026-06-26 | Walczaki          | W   | 0.947      | 0.548        | 0.096 (0.050)    | 1.000 (0.519)    | 1 (0.947) |     9.42 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           48 |      809 | 2026-06-25 | Sashi             | W   | 0.942      | 0.548        | 0.031 (0.016)    | 0.586 (0.303)    | 1 (0.942) |     5.60 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           47 |      818 | 2026-06-25 | 9INE              | W   | 0.940      | -            | -                | -                | 1 (0.940) |     3.16 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           46 |      839 | 2026-06-24 | DENDELE           | L   | 0.934      | -            | -                | -                | -         |   -14.03 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           45 |      859 | 2026-06-23 | Nordic Partners   | W   | 0.925      | 0.548        | -                | 0.355 (0.180)    | 1 (0.925) |     1.92 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           44 |      885 | 2026-06-20 | Echo              | L   | 0.906      | -            | -                | -                | -         |   -21.14 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           43 |      912 | 2026-06-18 | Spirit Academy    | W   | 0.894      | -            | -                | -                | -         |     0.67 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           42 |     1618 | 2026-05-24 | FOKUS             | L   | 0.726      | -            | -                | -                | -         |   -15.36 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           41 |     1637 | 2026-05-23 | Bulgaria          | W   | 0.722      | 0.435        | 0.069 (0.022)    | 0.881 (0.276)    | 1 (0.722) |     8.17 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           40 |     1650 | 2026-05-23 | DENDELE           | W   | 0.720      | 0.435        | 0.115 (0.036)    | 0.609 (0.191)    | 1 (0.720) |    11.02 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           39 |     1691 | 2026-05-22 | Gaimin Gladiators | W   | 0.715      | -            | -                | -                | 1 (0.715) |     1.77 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           38 |     1698 | 2026-05-22 | Wildcard          | L   | 0.714      | -            | -                | -                | -         |   -14.25 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           37 |     1721 | 2026-05-22 | OG                | W   | 0.712      | -            | -                | -                | 1 (0.712) |     2.38 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           36 |     1756 | 2026-05-21 | INFINITE          | L   | 0.706      | -            | -                | -                | -         |   -14.91 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           35 |     1759 | 2026-05-21 | KOLESIE           | W   | 0.706      | 0.435        | -                | 0.893 (0.274)    | -         |     2.31 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           34 |     1768 | 2026-05-21 | Bulgaria          | L   | 0.705      | -            | -                | -                | -         |   -15.13 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           33 |     1775 | 2026-05-21 | HAVU              | W   | 0.704      | -            | -                | -                | -         |     0.92 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           32 |     1783 | 2026-05-21 | CHAOS             | W   | 0.704      | -            | -                | -                | -         |     0.06 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           31 |     3105 | 2026-04-07 | B8                | L   | 0.412      | -            | -                | -                | -         |    -3.52 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           30 |     3132 | 2026-04-06 | FaZe              | W   | 0.406      | 1.000        | 0.565 (0.229)    | 0.540 (0.219)    | -         |    10.19 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           29 |     3169 | 2026-04-05 | Legacy            | L   | 0.400      | -            | -                | -                | -         |    -1.44 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           28 |     3277 | 2026-04-04 | FUT               | L   | 0.391      | -            | -                | -                | -         |    -2.87 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           27 |     3600 | 2026-03-31 | Alliance          | L   | 0.367      | -            | -                | -                | -         |    -2.96 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           26 |     3669 | 2026-03-30 | BASEMENT BOYS     | W   | 0.361      | -            | -                | -                | -         |     1.58 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           25 |     3711 | 2026-03-30 | Liquid            | L   | 0.359      | -            | -                | -                | -         |    -7.60 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           24 |     3735 | 2026-03-29 | Partizan          | W   | 0.354      | -            | -                | -                | -         |     0.07 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           23 |     3755 | 2026-03-29 | Romania           | W   | 0.354      | -            | -                | -                | -         |     0.10 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           22 |     3799 | 2026-03-29 | Partizan          | L   | 0.351      | -            | -                | -                | -         |   -11.00 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           21 |     4004 | 2026-03-25 | HOTU              | L   | 0.327      | -            | -                | -                | -         |    -7.35 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           20 |     4056 | 2026-03-24 | 9INE              | W   | 0.319      | -            | -                | -                | -         |     0.66 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           19 |     4064 | 2026-03-24 | OG                | W   | 0.319      | -            | -                | -                | -         |     0.77 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           18 |     4361 | 2026-03-19 | K27               | L   | 0.285      | -            | -                | -                | -         |    -5.33 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           17 |     4440 | 2026-03-17 | Rune Eaters       | W   | 0.272      | -            | -                | -                | -         |     2.09 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           16 |     5041 | 2026-03-05 | Walczaki          | L   | 0.192      | -            | -                | -                | -         |    -5.13 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           15 |     5207 | 2026-03-01 | FOKUS             | L   | 0.167      | -            | -                | -                | -         |    -3.71 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           14 |     5226 | 2026-03-01 | EYEBALLERS        | W   | 0.165      | 0.769        | 0.141 (0.018)    | -                | -         |     1.78 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           13 |     5245 | 2026-02-28 | BetBoom           | W   | 0.161      | 0.769        | 0.335 (0.042)    | -                | -         |     4.22 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           12 |     5266 | 2026-02-28 | Echo              | W   | 0.159      | -            | -                | -                | -         |     1.21 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           11 |     5287 | 2026-02-27 | FOKUS             | L   | 0.155      | -            | -                | -                | -         |    -3.44 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           10 |     5355 | 2026-02-26 | fnatic            | W   | 0.147      | -            | -                | -                | -         |     0.47 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            9 |     5481 | 2026-02-24 | TDK               | L   | 0.132      | -            | -                | -                | -         |    -4.03 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            8 |     5854 | 2026-02-17 | SPARTA            | L   | 0.087      | -            | -                | -                | -         |    -2.57 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            7 |     5926 | 2026-02-15 | Eternal Fire      | W   | 0.075      | -            | -                | -                | -         |     0.06 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            6 |     5946 | 2026-02-15 | Mai Tai           | W   | 0.074      | -            | -                | -                | -         |     0.04 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            5 |     6128 | 2026-02-12 | Misa              | L   | 0.051      | -            | -                | -                | -         |    -1.60 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            4 |     6147 | 2026-02-11 | Johnny Speeds     | L   | 0.047      | -            | -                | -                | -         |    -1.34 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            3 |     6153 | 2026-02-11 | CYBERSHOKE        | W   | 0.046      | -            | -                | -                | -         |     0.21 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            2 |     6171 | 2026-02-10 | BET-M             | L   | 0.042      | -            | -                | -                | -         |    -1.22 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|            1 |     6187 | 2026-02-10 | Echo              | W   | 0.040      | -            | -                | -                | -         |     0.30 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,169.31)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.961 | $60,000.00     | $57,689.97      |
| 2026-05-24 |      0.727 | $5,000.00      | $3,636.48       |
| 2026-04-11 |      0.440 | $18,750.00     | $8,254.49       |
| 2026-03-20 |      0.294 | $2,000.00      | $588.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
