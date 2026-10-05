### Roster Details<br />
Team Name: STATE<br />
Roster: kwezz, Patti, Queenix, sL1m3, Zanto<br />
Global Rank: [103](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [78]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  920.1<br />
<br />
Final Rank Value (920.1) = Starting Rank Value (986.6) + Head To Head Adjustments (-66.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.530[<sup>2</sup>](#table1)

The average of these factors is 0.308<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 986.6
- 400 + ( ( 0.308 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 986.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      313 | 2026-08-29 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -13.00 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           45 |      324 | 2026-08-29 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -11.57 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           44 |      375 | 2026-08-28 | G2 Ares          | L   | 1.000      | -            | -                | -                | -         |   -17.42 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           43 |      397 | 2026-08-27 | ENCE             | W   | 1.000      | 0.371        | 0.012 (0.005)    | 0.513 (0.190)    | -         |    12.35 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           42 |      424 | 2026-08-27 | GenOne           | L   | 1.000      | -            | -                | -                | -         |    -9.84 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           41 |     1202 | 2026-07-31 | CYBERSHOKE       | L   | 0.945      | -            | -                | -                | -         |   -14.81 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           40 |     1282 | 2026-07-29 | Fortress         | W   | 0.929      | 0.396        | 0.002 (0.001)    | 0.208 (0.077)    | -         |     5.87 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           39 |     1368 | 2026-07-26 | Lazer Cats       | L   | 0.911      | -            | -                | -                | -         |   -21.05 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           38 |     1421 | 2026-07-25 | Fortress         | W   | 0.903      | 0.396        | 0.002 (0.001)    | 0.208 (0.074)    | -         |     4.99 | kwezz, Patti, Queenix, sL1m3, Zanto    |
|           37 |     2204 | 2026-06-13 | MASQ             | W   | 0.625      | -            | -                | -                | 1 (0.625) |     3.38 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           36 |     2217 | 2026-06-13 | MASONIC          | L   | 0.624      | -            | -                | -                | -         |   -12.71 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           35 |     2253 | 2026-06-12 | Washed           | W   | 0.619      | 0.357        | 0.009 (0.002)    | -                | 1 (0.619) |     4.97 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           34 |     2262 | 2026-06-12 | ex-Sashi Academy | W   | 0.618      | 0.357        | -                | 0.188 (0.041)    | 1 (0.618) |     3.41 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           33 |     2812 | 2026-05-24 | 100 Thieves      | W   | 0.492      | 0.341        | 0.150 (0.025)    | 0.589 (0.099)    | 1 (0.492) |    14.13 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           32 |     2822 | 2026-05-24 | Fortress         | W   | 0.491      | 0.341        | -                | 0.208 (0.035)    | 1 (0.491) |     3.66 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           31 |     2830 | 2026-05-24 | 100 Thieves      | L   | 0.490      | -            | -                | -                | -         |    -1.30 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           30 |     2866 | 2026-05-23 | Invicta          | W   | 0.484      | -            | -                | -                | 1 (0.484) |     2.07 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           29 |     2894 | 2026-05-23 | 95 Vikings       | W   | 0.483      | -            | -                | -                | 1 (0.483) |     0.61 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           28 |     3568 | 2026-05-01 | Black Phoenix    | L   | 0.336      | -            | -                | -                | -         |    -6.35 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           27 |     3697 | 2026-04-28 | BRUTE            | W   | 0.316      | -            | -                | -                | -         |     1.66 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           26 |     3740 | 2026-04-27 | Lilmix           | L   | 0.310      | -            | -                | -                | -         |    -7.82 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           25 |     3790 | 2026-04-26 | MASONIC          | W   | 0.304      | 0.322        | 0.006 (0.001)    | -                | 1 (0.304) |     3.70 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           24 |     3809 | 2026-04-26 | Sashi Academy    | W   | 0.303      | -            | -                | -                | 1 (0.303) |     1.25 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           23 |     3838 | 2026-04-25 | XI               | W   | 0.299      | -            | -                | -                | 1 (0.299) |     1.13 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           22 |     4194 | 2026-04-11 | ex-RUBY          | L   | 0.203      | -            | -                | -                | -         |    -5.50 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           21 |     4314 | 2026-04-07 | Walczaki         | L   | 0.176      | -            | -                | -                | -         |    -2.51 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           20 |     4334 | 2026-04-06 | ENCE             | W   | 0.171      | 0.435        | 0.012 (0.001)    | 0.513 (0.038)    | -         |     2.48 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           19 |     4378 | 2026-04-05 | ex-RUBY          | L   | 0.165      | -            | -                | -                | -         |    -4.49 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           18 |     4518 | 2026-04-03 | ex-RUSTEC        | L   | 0.152      | -            | -                | -                | -         |    -2.38 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           17 |     4551 | 2026-04-03 | ex-Zero Tenacity | W   | 0.150      | 0.371        | 0.031 (0.002)    | 1.000 (0.056)    | -         |     1.91 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           16 |     4745 | 2026-04-01 | PsychoFace       | W   | 0.137      | 0.435        | 0.009 (0.001)    | 0.383 (0.023)    | -         |     1.93 | anarkez, kwezz, Patti, thamlike, Zanto |
|           15 |     4862 | 2026-03-31 | Nemesis          | L   | 0.129      | -            | -                | -                | -         |    -1.30 | anarkez, kwezz, Patti, thamlike, Zanto |
|           14 |     4878 | 2026-03-30 | Bebop            | W   | 0.126      | -            | -                | -                | -         |     0.23 | anarkez, kwezz, Patti, thamlike, Zanto |
|           13 |     4901 | 2026-03-30 | Bebop            | W   | 0.124      | -            | -                | -                | -         |     0.23 | anarkez, kwezz, Patti, thamlike, Zanto |
|           12 |     4926 | 2026-03-30 | OlyBet           | W   | 0.123      | -            | -                | -                | -         |     0.41 | anarkez, kwezz, Patti, thamlike, Zanto |
|           11 |     4976 | 2026-03-29 | PsychoFace       | L   | 0.118      | -            | -                | -                | -         |    -2.08 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           10 |     5119 | 2026-03-27 | Black Phoenix    | L   | 0.105      | -            | -                | -                | -         |    -2.11 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|            9 |     5217 | 2026-03-25 | Permitta         | W   | 0.091      | 0.435        | -                | 0.689 (0.027)    | -         |     0.86 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|            8 |     5328 | 2026-03-23 | cirahvi          | W   | 0.079      | -            | -                | -                | -         |     0.29 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|            7 |     5427 | 2026-03-21 | Permitta         | L   | 0.066      | -            | -                | -                | -         |    -1.46 | kwezz, Patti, SinK, thamlike, Zanto    |
|            6 |     5498 | 2026-03-20 | Persona Grata    | W   | 0.059      | -            | -                | -                | -         |     0.12 | kwezz, Patti, SinK, thamlike, Zanto    |
|            5 |     5551 | 2026-03-19 | Bushido Wildcats | W   | 0.051      | 0.384        | 0.017 (0.000)    | -                | -         |     0.50 | kwezz, Patti, SinK, thamlike, Zanto    |
|            4 |     5609 | 2026-03-18 | KHAN             | W   | 0.043      | -            | -                | -                | -         |     0.05 | kwezz, Patti, SinK, thamlike, Zanto    |
|            3 |     5642 | 2026-03-17 | G2 Ares          | L   | 0.038      | -            | -                | -                | -         |    -0.52 | kwezz, Patti, SinK, thamlike, Zanto    |
|            2 |     5771 | 2026-03-14 | Bebop            | L   | 0.018      | -            | -                | -                | -         |    -0.45 | Damkilde, kwezz, Patti, sL1m3, Zanto   |
|            1 |     5839 | 2026-03-13 | Rune Eaters      | L   | 0.010      | -            | -                | -                | -         |    -0.07 | Dengzoe, kwezz, Patti, sL1m3, Zanto    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,498.60)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $750.00        | $750.00         |
| 2026-06-13 |      0.625 | $1,578.00      | $986.98         |
| 2026-05-24 |      0.492 | $5,809.00      | $2,857.16       |
| 2026-04-26 |      0.304 | $6,258.00      | $1,904.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
