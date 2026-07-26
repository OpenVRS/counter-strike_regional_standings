### Roster Details<br />
Team Name: Oxuji Esports<br />
Roster: ayano, HeCkBNk, k1ssly, Kurama, nitzie<br />
Global Rank: [86](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [61]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1032.3<br />
<br />
Final Rank Value (1032.3) = Starting Rank Value (1173.6) + Head To Head Adjustments (-141.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.730[<sup>2</sup>](#table1)

The average of these factors is 0.408<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1173.6
- 400 + ( ( 0.408 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1173.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.763
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |      370 | 2026-06-19 | Walczaki                  | L   | 1.000      | -            | -                | -                | -         |    -7.04 | ayano, k1ssly, Kurama, nitzie, smith    |
|           76 |      379 | 2026-06-18 | INFINITE                  | L   | 1.000      | -            | -                | -                | -         |    -5.65 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           75 |      443 | 2026-06-14 | Nuclear TigeRES           | W   | 1.000      | 0.371        | 0.079 (0.029)    | 0.786 (0.291)    | -         |    24.96 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           74 |      484 | 2026-06-13 | Misa Esports              | W   | 1.000      | 0.371        | -                | 0.530 (0.196)    | -         |     7.38 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           73 |      497 | 2026-06-13 | Brazylijski luz           | L   | 1.000      | -            | -                | -                | -         |   -24.16 | ayano, k1ssly, K1yotaka, Kurama, nitzie |
|           72 |      543 | 2026-06-11 | Bebop                     | L   | 0.991      | -            | -                | -                | -         |   -23.70 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           71 |      575 | 2026-06-09 | Virtus.pro                | L   | 0.977      | -            | -                | -                | -         |    -7.46 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           70 |      583 | 2026-06-09 | Ex-MANA eSports           | W   | 0.976      | 0.371        | -                | 0.580 (0.210)    | -         |     5.68 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           69 |      683 | 2026-06-05 | Misa Esports              | L   | 0.950      | -            | -                | -                | -         |   -24.19 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           68 |      954 | 2026-05-27 | K27                       | L   | 0.891      | -            | -                | -                | -         |    -8.23 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           67 |     1037 | 2026-05-25 | SPARTA Esports            | W   | 0.877      | 0.396        | 0.025 (0.009)    | 0.752 (0.261)    | 1 (0.877) |    10.53 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           66 |     1046 | 2026-05-25 | Athlon                    | W   | 0.876      | -            | -                | -                | 1 (0.876) |     0.56 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           65 |     1053 | 2026-05-24 | Nuclear TigeRES           | L   | 0.875      | -            | -                | -                | -         |    -7.71 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           64 |     1106 | 2026-05-23 | CYBERSHOKE Prospects      | W   | 0.865      | -            | -                | -                | 1 (0.865) |    15.15 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           63 |     1116 | 2026-05-23 | BAKS Esports              | W   | 0.864      | -            | -                | -                | 1 (0.864) |     3.27 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           62 |     1129 | 2026-05-23 | Team Spirit Academy Black | W   | 0.863      | -            | -                | -                | 1 (0.863) |     2.04 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           61 |     1159 | 2026-05-22 | Eternal premium           | W   | 0.859      | -            | -                | -                | 1 (0.859) |     2.82 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           60 |     1165 | 2026-05-22 | Aurora Young Blud         | W   | 0.858      | -            | -                | -                | 1 (0.858) |     1.77 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           59 |     1170 | 2026-05-22 | CYBERSHOKE Prospects      | L   | 0.857      | -            | -                | -                | -         |   -11.79 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           58 |     1284 | 2026-05-19 | FOKUS                     | L   | 0.838      | -            | -                | -                | -         |    -7.03 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           57 |     1366 | 2026-05-16 | Johnny Speeds             | W   | 0.816      | 0.435        | 0.047 (0.017)    | 0.749 (0.266)    | -         |    13.53 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           56 |     1399 | 2026-05-15 | Sashi Esport              | L   | 0.809      | -            | -                | -                | -         |   -10.62 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           55 |     1495 | 2026-05-12 | FAVBET Team               | W   | 0.789      | -            | -                | -                | -         |     6.18 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           54 |     1497 | 2026-05-12 | SPARTA Esports            | L   | 0.789      | -            | -                | -                | -         |   -13.57 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           53 |     1515 | 2026-05-11 | Los kogutos               | W   | 0.785      | 0.435        | 0.019 (0.006)    | 0.940 (0.321)    | -         |     6.08 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           52 |     1560 | 2026-05-10 | FAVBET Team               | W   | 0.777      | -            | -                | -                | -         |     6.84 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           51 |     1603 | 2026-05-09 | Nuclear TigeRES           | L   | 0.769      | -            | -                | -                | -         |    -7.16 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           50 |     1632 | 2026-05-07 | Ursa                      | W   | 0.758      | 0.384        | -                | 0.890 (0.259)    | -         |     9.21 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           49 |     1648 | 2026-05-06 | Ex-RUBY                   | L   | 0.751      | -            | -                | -                | -         |   -15.27 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           48 |     1656 | 2026-05-06 | Ursa                      | W   | 0.750      | 0.384        | -                | 0.890 (0.256)    | -         |     9.72 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           47 |     1714 | 2026-05-03 | GenOne                    | W   | 0.731      | 0.384        | -                | 1.000 (0.281)    | -         |     4.92 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           46 |     1775 | 2026-05-02 | Bebop                     | W   | 0.722      | -            | -                | -                | -         |     1.17 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           45 |     1827 | 2026-05-01 | Walczaki                  | L   | 0.716      | -            | -                | -                | -         |    -8.59 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           44 |     1863 | 2026-04-30 | HEROIC Academy            | W   | 0.710      | -            | -                | -                | -         |     3.66 | ayano, HeCkBNk, k1ssly, Kurama, nitzie  |
|           43 |     2188 | 2026-04-24 | Alliance                  | L   | 0.670      | -            | -                | -                | -         |    -1.11 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           42 |     2242 | 2026-04-22 | FAVBET Team               | W   | 0.657      | -            | -                | -                | -         |     5.22 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           41 |     2268 | 2026-04-20 | Ex-RUBY                   | L   | 0.644      | -            | -                | -                | -         |   -12.62 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           40 |     2326 | 2026-04-18 | Lavked                    | W   | 0.629      | 0.435        | 0.016 (0.004)    | 0.941 (0.257)    | -         |     6.28 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           39 |     2340 | 2026-04-17 | TDK                       | L   | 0.622      | -            | -                | -                | -         |    -7.85 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           38 |     2362 | 2026-04-15 | CYBERSHOKE Esports        | W   | 0.611      | 0.435        | 0.019 (0.005)    | -                | -         |     9.02 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           37 |     3386 | 2026-03-27 | PsychoFace                | L   | 0.483      | -            | -                | -                | -         |    -9.50 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           36 |     3499 | 2026-03-24 | RUSTEC                    | L   | 0.465      | -            | -                | -                | -         |   -12.44 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           35 |     3595 | 2026-03-23 | PsychoFace                | W   | 0.458      | 0.384        | 0.027 (0.005)    | -                | -         |     4.86 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           34 |     3784 | 2026-03-20 | PsychoFace                | L   | 0.436      | -            | -                | -                | -         |    -9.36 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           33 |     3896 | 2026-03-17 | Hashiras                  | L   | 0.418      | -            | -                | -                | -         |   -11.70 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           32 |     3952 | 2026-03-16 | PsychoFace                | W   | 0.410      | 0.384        | 0.027 (0.004)    | -                | -         |     4.28 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           31 |     4239 | 2026-03-09 | K27                       | L   | 0.366      | -            | -                | -                | -         |    -3.98 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           30 |     4244 | 2026-03-09 | Arch Esports              | W   | 0.365      | -            | -                | -                | 1 (0.365) |     0.76 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           29 |     4263 | 2026-03-09 | K27                       | L   | 0.364      | -            | -                | -                | -         |    -3.94 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           28 |     4400 | 2026-03-07 | Ex-Zero Tenacity          | L   | 0.351      | -            | -                | -                | -         |    -9.45 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           27 |     4411 | 2026-03-07 | Sashi Esport              | L   | 0.350      | -            | -                | -                | -         |    -6.32 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           26 |     4440 | 2026-03-06 | Phantom Esports           | W   | 0.344      | -            | -                | -                | -         |     3.71 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           25 |     4509 | 2026-03-05 | NOVAQ                     | L   | 0.336      | -            | -                | -                | -         |    -8.89 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           24 |     4533 | 2026-03-04 | ARCRED                    | L   | 0.331      | -            | -                | -                | -         |    -6.20 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           23 |     4559 | 2026-03-04 | Virtus.pro                | L   | 0.329      | -            | -                | -                | -         |    -4.48 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           22 |     4588 | 2026-03-03 | Eternal Fire              | W   | 0.324      | -            | -                | -                | -         |     3.50 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           21 |     4609 | 2026-03-03 | Phantom Esports           | L   | 0.323      | -            | -                | -                | -         |    -9.63 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           20 |     4649 | 2026-03-02 | WW TEAM                   | W   | 0.316      | -            | -                | -                | -         |     2.96 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           19 |     4665 | 2026-03-01 | MOUZ NXT                  | L   | 0.312      | -            | -                | -                | -         |    -7.95 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           18 |     4709 | 2026-02-28 | Dripmen                   | W   | 0.305      | -            | -                | -                | -         |     0.69 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           17 |     4889 | 2026-02-25 | FORZE Reload              | W   | 0.283      | -            | -                | -                | -         |     0.26 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           16 |     4922 | 2026-02-24 | Brazylijski luz           | W   | 0.278      | -            | -                | -                | -         |     0.86 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           15 |     4978 | 2026-02-23 | Players (European team)   | W   | 0.270      | -            | -                | -                | -         |     0.24 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           14 |     5102 | 2026-02-21 | Ex-Zero Tenacity          | W   | 0.257      | -            | -                | -                | -         |     0.90 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           13 |     5212 | 2026-02-19 | Ex-against All authority  | W   | 0.243      | -            | -                | -                | -         |     1.05 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           12 |     5292 | 2026-02-17 | MOUZ NXT                  | L   | 0.233      | -            | -                | -                | -         |    -6.03 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           11 |     5305 | 2026-02-17 | Ursa                      | W   | 0.231      | -            | -                | -                | -         |     1.15 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|           10 |     5429 | 2026-02-15 | Nuclear TigeRES           | L   | 0.217      | -            | -                | -                | -         |    -2.70 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            9 |     5436 | 2026-02-15 | K27                       | W   | 0.216      | 0.371        | 0.082 (0.007)    | -                | 1 (0.216) |     4.05 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            8 |     5463 | 2026-02-14 | Team Nemesis              | W   | 0.211      | 0.371        | 0.229 (0.018)    | -                | 1 (0.211) |     4.85 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            7 |     5487 | 2026-02-14 | SPARTA Esports            | W   | 0.210      | -            | -                | -                | -         |     2.35 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            6 |     5499 | 2026-02-14 | 1w Team                   | L   | 0.209      | -            | -                | -                | -         |    -3.35 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            5 |     5581 | 2026-02-12 | Atreides                  | L   | 0.197      | -            | -                | -                | -         |    -5.61 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            4 |     5602 | 2026-02-11 | Cirahvi                   | L   | 0.192      | -            | -                | -                | -         |    -5.64 | ayano, fluffy, HeCkBNk, k1ssly, Kurama  |
|            3 |     5894 | 2026-02-01 | Team Nemesis              | L   | 0.125      | -            | -                | -                | -         |    -1.02 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            2 |     5900 | 2026-02-01 | BankaPEPSI                | W   | 0.125      | -            | -                | -                | -         |     0.19 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |
|            1 |     5915 | 2026-02-01 | Nemiga Gaming             | L   | 0.123      | -            | -                | -                | -         |    -2.10 | ayano, HeCkBNk, k1ssly, Kurama, Mikejio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,055.97)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.898 | $750.00        | $673.75         |
| 2026-05-23 |      0.865 | $2,000.00      | $1,729.72       |
| 2026-02-15 |      0.218 | $3,000.00      | $652.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
