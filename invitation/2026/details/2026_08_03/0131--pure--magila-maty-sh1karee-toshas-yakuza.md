### Roster Details<br />
Team Name: PURE<br />
Roster: MAGILA, maty, Sh1karee, Toshas, yakuza<br />
Global Rank: [131](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [93]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  898.9<br />
<br />
Final Rank Value (898.9) = Starting Rank Value (974.1) + Head To Head Adjustments (-75.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.644[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 974.1
- 400 + ( ( 0.296 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 974.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      120 | 2026-07-28 | MOUZ NXT   | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.457 (0.139)    | 1 (1.000) |    14.18 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|           14 |      127 | 2026-07-28 | ASTRAL     | L   | 1.000      | -            | -                | -                | -         |   -10.64 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|           13 |      153 | 2026-07-27 | Noir Verse | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.207 (0.063)    | 1 (1.000) |    14.14 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|           12 |      158 | 2026-07-27 | ASTRAL     | W   | 1.000      | 0.303        | 0.014 (0.004)    | 1.000 (0.303)    | 1 (1.000) |    21.50 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|           11 |      160 | 2026-07-27 | atputies   | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.047 (0.014)    | 1 (1.000) |     4.59 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|           10 |      563 | 2026-07-10 | Tricksters | L   | 1.000      | -            | -                | -                | -         |   -25.18 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            9 |      580 | 2026-07-09 | mellren    | L   | 1.000      | -            | -                | -                | -         |   -25.11 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            8 |     1006 | 2026-06-13 | aimclub    | L   | 0.860      | -            | -                | -                | -         |   -19.44 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            7 |     1017 | 2026-06-13 | SAAB       | W   | 0.859      | 0.373        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.859) |     1.36 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            6 |     1023 | 2026-06-13 | Nexus      | L   | 0.859      | -            | -                | -                | -         |   -15.75 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            5 |     1886 | 2026-05-16 | Honvéd     | L   | 0.674      | -            | -                | -                | -         |   -14.09 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            4 |     1897 | 2026-05-16 | MTX        | W   | 0.673      | 0.341        | 0.000 (0.000)    | 0.071 (0.016)    | 1 (0.673) |     2.38 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            3 |     1903 | 2026-05-16 | MASONIC    | L   | 0.672      | -            | -                | -                | -         |   -10.14 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            2 |     3249 | 2026-04-04 | Sangal     | L   | 0.393      | -            | -                | -                | -         |    -8.00 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            1 |     3265 | 2026-04-04 | Passion UA | L   | 0.392      | -            | -                | -                | -         |    -5.04 | emzijs, maty, OXFROG, Sh1karee, yakuza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-28 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
