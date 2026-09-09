### Roster Details<br />
Team Name: BETBOOM<br />
Roster: Boombl4, d1Ledez, Magnojez, S1ren, zorte<br />
Global Rank: [15](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [12]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1495.7<br />
<br />
Final Rank Value (1495.7) = Starting Rank Value (1461.5) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.625[<sup>1</sup>](#table2)
- Bounty Collected: 0.627[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.720[<sup>2</sup>](#table1)

The average of these factors is 0.557<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1461.5
- 400 + ( ( 0.557 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1461.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      849 | 2026-08-14 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -22.61 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           41 |      886 | 2026-08-12 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -13.57 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           40 |     1801 | 2026-07-10 | FaZe              | L   | 0.799      | -            | -                | -                | -         |   -11.97 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           39 |     1891 | 2026-07-03 | Nemesis           | W   | 0.753      | 1.000        | 0.167 (0.126)    | 0.572 (0.431)    | 1 (0.753) |     3.27 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           38 |     1915 | 2026-07-02 | BIG               | W   | 0.745      | 1.000        | 0.150 (0.112)    | 0.566 (0.422)    | 1 (0.745) |    11.25 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           37 |     1933 | 2026-07-01 | SINNERS           | W   | 0.739      | 1.000        | -                | 0.475 (0.351)    | 1 (0.739) |     1.70 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           36 |     2152 | 2026-06-18 | Aurora            | L   | 0.652      | -            | -                | -                | -         |    -9.29 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           35 |     2183 | 2026-06-15 | FUT               | W   | 0.632      | 1.000        | 1.000 (0.632)    | 0.354 (0.224)    | 1 (0.632) |    17.49 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           34 |     2204 | 2026-06-14 | Vitality          | L   | 0.626      | -            | -                | -                | -         |    -2.19 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           33 |     2233 | 2026-06-13 | FURIA             | L   | 0.620      | -            | -                | -                | -         |    -3.71 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           32 |     2288 | 2026-06-12 | Falcons           | W   | 0.613      | 1.000        | 1.000 (0.613)    | 0.446 (0.273)    | 1 (0.613) |    17.35 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           31 |     2322 | 2026-06-11 | The MongolZ       | W   | 0.604      | 1.000        | 0.350 (0.212)    | 0.292 (0.176)    | 1 (0.604) |     7.90 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           30 |     2369 | 2026-06-08 | Luminosity        | W   | 0.586      | -            | -                | -                | 1 (0.586) |     3.80 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           29 |     2395 | 2026-06-07 | M80               | W   | 0.579      | 0.809        | -                | 0.350 (0.164)    | 1 (0.579) |     3.93 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           28 |     2412 | 2026-06-06 | GamerLegion       | W   | 0.573      | 0.809        | 0.341 (0.158)    | -                | 1 (0.573) |     7.30 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           27 |     2425 | 2026-06-06 | Spirit            | L   | 0.572      | -            | -                | -                | -         |    -0.91 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           26 |     2495 | 2026-06-03 | GamerLegion       | W   | 0.552      | 0.624        | 0.341 (0.118)    | -                | 1 (0.552) |     7.29 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           25 |     2511 | 2026-06-02 | Liquid            | W   | 0.547      | 0.624        | -                | 0.387 (0.132)    | -         |     8.42 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           24 |     2525 | 2026-06-02 | Gaimin Gladiators | W   | 0.545      | -            | -                | -                | -         |     0.28 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           23 |     3105 | 2026-05-17 | Legacy            | L   | 0.439      | -            | -                | -                | -         |    -1.72 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           22 |     3118 | 2026-05-16 | Natus Vincere     | L   | 0.434      | -            | -                | -                | -         |    -4.75 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           21 |     3201 | 2026-05-13 | paiN              | W   | 0.414      | 1.000        | 0.300 (0.124)    | -                | -         |     4.04 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           20 |     3245 | 2026-05-12 | Vitality          | W   | 0.407      | 1.000        | 0.858 (0.349)    | 0.422 (0.172)    | -         |    11.82 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           19 |     3291 | 2026-05-11 | B8                | W   | 0.400      | 1.000        | 0.262 (0.105)    | 0.567 (0.227)    | -         |     6.66 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           18 |     3940 | 2026-04-24 | Black Phoenix     | L   | 0.286      | -            | -                | -                | -         |    -8.64 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           17 |     4468 | 2026-04-04 | G2                | L   | 0.153      | -            | -                | -                | -         |    -0.85 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           16 |     4487 | 2026-04-04 | GamerLegion       | W   | 0.152      | -            | -                | -                | -         |     1.86 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           15 |     4552 | 2026-04-03 | HEROIC            | W   | 0.147      | -            | -                | -                | -         |     1.75 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           14 |     4584 | 2026-04-03 | 9INE              | W   | 0.144      | -            | -                | -                | -         |     0.44 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           13 |     4657 | 2026-04-02 | G2                | L   | 0.139      | -            | -                | -                | -         |    -0.76 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           12 |     4762 | 2026-04-01 | HEROIC            | W   | 0.132      | -            | -                | -                | -         |     1.58 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           11 |     4903 | 2026-03-30 | BESTIA            | W   | 0.121      | -            | -                | -                | -         |     0.20 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|           10 |     4905 | 2026-03-30 | G2                | W   | 0.120      | -            | -                | -                | -         |     3.15 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            9 |     4948 | 2026-03-30 | SINNERS           | W   | 0.118      | -            | -                | -                | -         |     0.44 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            8 |     5091 | 2026-03-28 | Sangal            | W   | 0.106      | -            | -                | -                | -         |     0.05 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            7 |     5102 | 2026-03-28 | Wildcard          | L   | 0.105      | -            | -                | -                | -         |    -2.94 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            6 |     5110 | 2026-03-28 | BESTIA            | L   | 0.105      | -            | -                | -                | -         |    -3.13 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            5 |     5114 | 2026-03-28 | NOMERCY           | W   | 0.104      | -            | -                | -                | -         |     0.01 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            4 |     5184 | 2026-03-26 | HOTU              | W   | 0.093      | -            | -                | -                | -         |     1.40 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            3 |     5197 | 2026-03-26 | SINNERS           | L   | 0.092      | -            | -                | -                | -         |    -2.57 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            2 |     5220 | 2026-03-25 | Luminosity        | W   | 0.087      | -            | -                | -                | -         |     0.51 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            1 |     5247 | 2026-03-25 | Eternal Fire      | W   | 0.085      | -            | -                | -                | -         |     0.03 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126,535.99)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-07-12 |      0.811 | $50,000.00     | $40,553.14      |
| 2026-06-21 |      0.673 | $45,000.00     | $30,280.31      |
| 2026-05-17 |      0.441 | $95,000.00     | $41,850.64      |
| 2026-04-04 |      0.153 | $17,500.00     | $2,680.44       |
| 2026-03-30 |      0.121 | $5,799.00      | $702.54         |
| 2026-03-26 |      0.094 | $5,000.00      | $468.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
