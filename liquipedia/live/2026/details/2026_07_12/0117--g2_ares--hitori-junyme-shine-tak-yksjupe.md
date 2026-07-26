### Roster Details<br />
Team Name: G2 Ares<br />
Roster: hitori, Junyme, SHiNE, tAk, yksjupe<br />
Global Rank: [117](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  913.8<br />
<br />
Final Rank Value (913.8) = Starting Rank Value (957.5) + Head To Head Adjustments (-43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.399[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 957.5
- 400 + ( ( 0.294 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 957.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.613
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      409 | 2026-06-15 | SPARTA Esports           | L   | 1.000      | -            | -                | -                | -         |   -13.66 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           45 |      416 | 2026-06-15 | Walczaki                 | L   | 1.000      | -            | -                | -                | -         |    -4.78 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           44 |      469 | 2026-06-13 | PsychoFace               | L   | 1.000      | -            | -                | -                | -         |   -16.49 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           43 |      531 | 2026-06-12 | Ex-RUBY                  | L   | 0.996      | -            | -                | -                | -         |    -9.51 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           42 |      556 | 2026-06-10 | Illwill                  | W   | 0.985      | 0.384        | 0.018 (0.007)    | -                | 0 (0.000) |    14.42 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           41 |      563 | 2026-06-10 | Young Ninjas             | W   | 0.983      | 0.371        | -                | 0.617 (0.225)    | 0 (0.000) |    13.53 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           40 |      664 | 2026-06-06 | Ex-against All authority | W   | 0.956      | 0.371        | 0.006 (0.002)    | -                | 0 (0.000) |     8.38 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           39 |      787 | 2026-05-31 | ENJOY (Russian team)     | L   | 0.917      | -            | -                | -                | -         |   -19.46 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           38 |      795 | 2026-05-31 | Vexar                    | W   | 0.916      | -            | -                | -                | 0 (0.000) |     7.10 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           37 |      801 | 2026-05-31 | Atreides                 | L   | 0.916      | -            | -                | -                | -         |   -18.12 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           36 |      840 | 2026-05-30 | ENJOY (Russian team)     | L   | 0.910      | -            | -                | -                | -         |   -21.04 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           35 |      918 | 2026-05-28 | NEW VISION               | W   | 0.897      | 0.303        | 0.007 (0.002)    | -                | 0 (0.000) |     7.86 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           34 |      969 | 2026-05-27 | Lilmix                   | W   | 0.890      | 0.384        | -                | 0.443 (0.152)    | -         |     6.36 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           33 |     1000 | 2026-05-26 | Misa Esports             | W   | 0.884      | 0.303        | -                | 0.530 (0.142)    | -         |     6.85 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           32 |     1004 | 2026-05-26 | Entropy Gaming           | W   | 0.883      | 0.384        | -                | 0.333 (0.113)    | -         |    10.23 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           31 |     1024 | 2026-05-25 | Lilmix                   | L   | 0.878      | -            | -                | -                | -         |   -20.68 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           30 |     1076 | 2026-05-24 | Donstu Esports           | W   | 0.870      | 0.303        | -                | 0.559 (0.147)    | -         |     6.32 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           29 |     1128 | 2026-05-23 | Phantom Esports Academy  | W   | 0.863      | -            | -                | -                | 1 (0.863) |     5.42 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           28 |     1336 | 2026-05-17 | Falcons Force            | L   | 0.823      | -            | -                | -                | -         |   -18.29 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           27 |     1435 | 2026-05-13 | MASONIC                  | W   | 0.798      | 0.344        | 0.011 (0.003)    | 0.493 (0.136)    | -         |    11.85 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           26 |     1482 | 2026-05-12 | Ex-against All authority | W   | 0.791      | -            | -                | -                | -         |     8.19 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           25 |     1743 | 2026-05-02 | Lilmix                   | W   | 0.725      | -            | -                | -                | 1 (0.725) |     7.30 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           24 |     1752 | 2026-05-02 | Johnny Speeds            | L   | 0.724      | -            | -                | -                | -         |    -6.75 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           23 |     1786 | 2026-05-01 | SAW Youngsters           | W   | 0.720      | -            | -                | -                | 1 (0.720) |     5.58 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           22 |     1789 | 2026-05-01 | ROUNDS                   | W   | 0.719      | -            | -                | -                | 1 (0.719) |     4.55 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           21 |     1793 | 2026-05-01 | Matrix (Ukrainian team)  | W   | 0.719      | -            | -                | -                | 1 (0.719) |     2.93 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           20 |     2032 | 2026-04-26 | Lavked                   | L   | 0.685      | -            | -                | -                | -         |   -11.13 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           19 |     2127 | 2026-04-25 | MASONIC                  | W   | 0.677      | 0.384        | 0.011 (0.003)    | 0.493 (0.128)    | -         |    10.64 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           18 |     2167 | 2026-04-24 | Wampirki                 | W   | 0.671      | -            | -                | -                | -         |     3.06 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           17 |     2236 | 2026-04-22 | Donstu Esports           | L   | 0.658      | -            | -                | -                | -         |   -15.58 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           16 |     2693 | 2026-04-04 | UNiTY esports            | L   | 0.538      | -            | -                | -                | -         |   -12.17 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           15 |     2782 | 2026-04-03 | Donstu Esports           | W   | 0.531      | 0.384        | -                | 0.559 (0.114)    | -         |     3.57 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           14 |     2878 | 2026-04-02 | Lavked                   | W   | 0.525      | 0.384        | 0.016 (0.003)    | 0.941 (0.190)    | -         |     7.12 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           13 |     2967 | 2026-04-01 | INOX Division            | L   | 0.518      | -            | -                | -                | -         |   -10.15 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           12 |     3149 | 2026-03-30 | OMEGA                    | W   | 0.505      | 0.384        | 0.016 (0.003)    | -                | -         |     8.57 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           11 |     3213 | 2026-03-29 | Mai tai                  | W   | 0.498      | -            | -                | -                | -         |     5.46 | hitori, Junyme, SHiNE, tAk, yksjupe |
|           10 |     3388 | 2026-03-27 | Imperial Academy         | L   | 0.483      | -            | -                | -                | -         |   -14.09 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            9 |     3759 | 2026-03-20 | UNiTY esports            | L   | 0.438      | -            | -                | -                | -         |   -10.27 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            8 |     3799 | 2026-03-19 | K27                      | L   | 0.432      | -            | -                | -                | -         |    -2.26 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            7 |     3904 | 2026-03-17 | WOPA Esport              | W   | 0.417      | 0.384        | 0.020 (0.003)    | -                | -         |    10.02 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            6 |     3943 | 2026-03-16 | PsychoFace               | W   | 0.411      | 0.384        | 0.027 (0.004)    | 0.974 (0.154)    | -         |     6.96 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            5 |     4538 | 2026-03-04 | 33                       | L   | 0.331      | -            | -                | -                | -         |    -3.37 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            4 |     4577 | 2026-03-03 | WW TEAM                  | W   | 0.325      | -            | -                | -                | -         |     5.57 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            3 |     4661 | 2026-03-01 | Acend                    | W   | 0.312      | 0.333        | 0.072 (0.007)    | -                | -         |     9.15 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            2 |     4760 | 2026-02-27 | Aurora Young Blud        | L   | 0.298      | -            | -                | -                | -         |    -8.19 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            1 |     5584 | 2026-02-12 | Bushido Wildcats         | L   | 0.196      | -            | -                | -                | -         |    -4.70 | hitori, Junyme, SHiNE, tAk, yksjupe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,578.20)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.917 | $1,500.00      | $1,375.73       |
| 2026-05-23 |      0.863 | $4,063.13      | $3,508.03       |
| 2026-05-02 |      0.725 | $500.00        | $362.50         |
| 2026-03-04 |      0.332 | $1,000.00      | $331.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
