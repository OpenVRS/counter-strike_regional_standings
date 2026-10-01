### Roster Details<br />
Team Name: BetBoom<br />
Roster: Boombl4, d1Ledez, FL4MUS, Magnojez, zorte<br />
Global Rank: [9](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1742.2<br />
<br />
Final Rank Value (1742.2) = Starting Rank Value (1776.4) + Head To Head Adjustments (-34.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.678[<sup>1</sup>](#table2)
- Bounty Collected: 0.701[<sup>2</sup>](#table1)
- Opponent Network: 0.464[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.711<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1776.4
- 400 + ( ( 0.711 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1776.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      566 | 2026-07-10 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -19.81 | Boombl4, d1Ledez, Magnojez, S1ren, zorte    |
|           56 |      656 | 2026-07-03 | Nemesis           | W   | 0.994      | 1.000        | 0.230 (0.229)    | 0.899 (0.894)    | 1 (0.994) |     3.46 | Boombl4, d1Ledez, Magnojez, S1ren, zorte    |
|           55 |      680 | 2026-07-02 | BIG               | W   | 0.986      | 1.000        | 0.170 (0.168)    | 0.725 (0.715)    | 1 (0.986) |     6.14 | Boombl4, d1Ledez, Magnojez, S1ren, zorte    |
|           54 |      698 | 2026-07-01 | SINNERS           | W   | 0.980      | 1.000        | -                | 0.446 (0.437)    | 1 (0.980) |     1.27 | Boombl4, d1Ledez, Magnojez, S1ren, zorte    |
|           53 |      917 | 2026-06-18 | Aurora            | L   | 0.893      | -            | -                | -                | -         |   -16.27 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           52 |      948 | 2026-06-15 | FUT               | W   | 0.873      | 1.000        | 0.589 (0.515)    | 0.342 (0.299)    | 1 (0.873) |    11.16 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           51 |      969 | 2026-06-14 | Vitality          | L   | 0.867      | -            | -                | -                | -         |    -9.57 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           50 |      998 | 2026-06-13 | FURIA             | L   | 0.861      | -            | -                | -                | -         |   -13.69 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           49 |     1053 | 2026-06-12 | Falcons           | W   | 0.853      | 1.000        | 1.000 (0.853)    | 0.525 (0.448)    | 1 (0.853) |    19.57 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           48 |     1087 | 2026-06-11 | The MongolZ       | W   | 0.845      | 1.000        | 0.492 (0.416)    | 0.447 (0.378)    | 1 (0.845) |     8.98 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           47 |     1134 | 2026-06-08 | Luminosity        | W   | 0.827      | -            | -                | -                | 1 (0.827) |     5.62 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           46 |     1160 | 2026-06-07 | M80               | W   | 0.819      | 0.809        | -                | 0.644 (0.427)    | 1 (0.819) |     2.86 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           45 |     1177 | 2026-06-06 | GamerLegion       | W   | 0.814      | 0.809        | 0.436 (0.287)    | -                | 1 (0.814) |     7.99 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           44 |     1190 | 2026-06-06 | Spirit            | L   | 0.813      | -            | -                | -                | -         |    -4.58 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           43 |     1260 | 2026-06-03 | GamerLegion       | W   | 0.793      | 0.624        | 0.436 (0.216)    | -                | 1 (0.793) |     8.27 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           42 |     1276 | 2026-06-02 | Liquid            | W   | 0.788      | -            | -                | -                | -         |     2.64 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           41 |     1290 | 2026-06-02 | Gaimin Gladiators | W   | 0.786      | -            | -                | -                | -         |     0.36 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte   |
|           40 |     1870 | 2026-05-17 | Legacy            | L   | 0.680      | -            | -                | -                | -         |    -8.60 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           39 |     1883 | 2026-05-16 | Natus Vincere     | L   | 0.675      | -            | -                | -                | -         |    -8.78 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           38 |     1966 | 2026-05-13 | paiN              | W   | 0.655      | 1.000        | 0.311 (0.204)    | 0.524 (0.343)    | -         |     4.66 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           37 |     2010 | 2026-05-12 | Vitality          | W   | 0.648      | 1.000        | 1.000 (0.648)    | 0.420 (0.272)    | -         |    14.01 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           36 |     2056 | 2026-05-11 | B8                | W   | 0.640      | 1.000        | 0.323 (0.207)    | 0.670 (0.429)    | -         |     7.46 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           35 |     2705 | 2026-04-24 | Black Phoenix     | L   | 0.527      | -            | -                | -                | -         |   -16.38 | Boombl4, d1Ledez, Magnojez, S1ren, zorte    |
|           34 |     3233 | 2026-04-04 | G2                | L   | 0.394      | -            | -                | -                | -         |    -7.07 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           33 |     3252 | 2026-04-04 | GamerLegion       | W   | 0.393      | -            | -                | -                | -         |     3.31 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           32 |     3317 | 2026-04-03 | HEROIC            | W   | 0.387      | -            | -                | -                | -         |     1.91 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           31 |     3349 | 2026-04-03 | 9INE              | W   | 0.385      | -            | -                | -                | -         |     0.21 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           30 |     3422 | 2026-04-02 | G2                | L   | 0.380      | -            | -                | -                | -         |    -7.03 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           29 |     3527 | 2026-04-01 | HEROIC            | W   | 0.373      | -            | -                | -                | -         |     1.71 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           28 |     3668 | 2026-03-30 | BESTIA            | W   | 0.362      | -            | -                | -                | -         |     0.34 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           27 |     3670 | 2026-03-30 | G2                | W   | 0.361      | -            | -                | -                | -         |     4.76 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           26 |     3713 | 2026-03-30 | SINNERS           | W   | 0.358      | -            | -                | -                | -         |     0.61 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           25 |     3856 | 2026-03-28 | Sangal            | W   | 0.346      | -            | -                | -                | -         |     0.08 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           24 |     3867 | 2026-03-28 | Wildcard          | L   | 0.346      | -            | -                | -                | -         |   -10.01 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           23 |     3875 | 2026-03-28 | BESTIA            | L   | 0.345      | -            | -                | -                | -         |   -10.61 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           22 |     3879 | 2026-03-28 | NOMERCY           | W   | 0.345      | -            | -                | -                | -         |     0.01 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           21 |     3949 | 2026-03-26 | HOTU              | W   | 0.334      | -            | -                | -                | -         |     0.85 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           20 |     3962 | 2026-03-26 | SINNERS           | L   | 0.332      | -            | -                | -                | -         |   -10.04 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           19 |     3985 | 2026-03-25 | Luminosity        | W   | 0.328      | -            | -                | -                | -         |     1.70 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           18 |     4012 | 2026-03-25 | Eternal Fire      | W   | 0.326      | -            | -                | -                | -         |     0.08 | Boombl4, FL4MUS, Magnojez, S1ren, zorte     |
|           17 |     5245 | 2026-02-28 | Inner Circle      | L   | 0.161      | -            | -                | -                | -         |    -4.22 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           16 |     5271 | 2026-02-28 | 9INE              | W   | 0.158      | -            | -                | -                | -         |     0.01 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           15 |     5297 | 2026-02-27 | fnatic            | W   | 0.154      | -            | -                | -                | -         |     0.11 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           14 |     5346 | 2026-02-26 | FOKUS             | L   | 0.148      | -            | -                | -                | -         |    -4.31 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           13 |     5538 | 2026-02-22 | fnatic            | W   | 0.121      | -            | -                | -                | -         |     0.08 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           12 |     5579 | 2026-02-22 | Gentle Mates      | L   | 0.119      | -            | -                | -                | -         |    -3.58 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           11 |     5629 | 2026-02-21 | 100 Thieves       | W   | 0.113      | -            | -                | -                | -         |     0.32 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|           10 |     5693 | 2026-02-20 | fnatic            | W   | 0.106      | -            | -                | -                | -         |     0.07 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            9 |     5701 | 2026-02-20 | SAW Youngsters    | W   | 0.105      | -            | -                | -                | -         |     0.02 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            8 |     6108 | 2026-02-12 | BET-M             | W   | 0.054      | -            | -                | -                | -         |     0.03 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            7 |     6144 | 2026-02-11 | SINNERS           | W   | 0.047      | -            | -                | -                | -         |     0.05 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            6 |     6189 | 2026-02-10 | ENCE              | W   | 0.040      | -            | -                | -                | -         |     0.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            5 |     6198 | 2026-02-10 | BASEMENT BOYS     | W   | 0.039      | -            | -                | -                | -         |     0.04 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            4 |     6295 | 2026-02-06 | magic             | L   | 0.014      | -            | -                | -                | -         |    -0.40 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            3 |     6311 | 2026-02-06 | ex-RUBY           | W   | 0.012      | -            | -                | -                | -         |     0.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            2 |     6336 | 2026-02-05 | KOLESIE           | W   | 0.005      | -            | -                | -                | -         |     0.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |
|            1 |     6351 | 2026-02-04 | Just Players      | W   | 0.000      | -            | -                | -                | -         |     0.00 | ArtFr0st, Boombl4, d1Ledez, Magnojez, S1ren |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($166,857.21)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      1.000 | $50,000.00     | $50,000.00      |
| 2026-06-21 |      0.914 | $45,000.00     | $41,113.01      |
| 2026-05-17 |      0.681 | $95,000.00     | $64,719.68      |
| 2026-04-04 |      0.394 | $17,500.00     | $6,893.15       |
| 2026-03-30 |      0.362 | $5,799.00      | $2,098.51       |
| 2026-03-26 |      0.335 | $5,000.00      | $1,672.55       |
| 2026-02-22 |      0.121 | $1,779.00      | $215.70         |
| 2026-02-06 |      0.014 | $10,000.00     | $144.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
